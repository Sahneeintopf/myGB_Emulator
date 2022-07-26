import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import {dirname} from 'path';
import {
    CARTRIDGE_TYPE,
    LICENSEE_CODE,
    ROM_SIZE,
    RAM_SIZE,
    DESTINATION_CODE,
} from './cart_lookup.js';
import {MemoryDevice} from '../memory/bus.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export class Cartridge implements MemoryDevice {
    public entryPoint: number[] = new Array<number>(4); // 4 bytes
    public logo: number[] = new Array<number>(48); // 48 bytes
    public title: number[] = new Array<number>(16); // Upper case ASCII 16 bytes
    public newLicenseeCode: number[] = new Array<number>(2); // 2 byte

    public SGB_FLAG: number = 0; // 1 byte
    public cartridgeType: number = 0; // 1 byte
    public ROM_Size: number = 0; // 1 byte
    public RAM_Size: number = 0; // 1 byte
    public destinationCode: number = 0; // 1 byte
    public oldLicenseeCode: number = 0; // 1 byte
    public versionNumber: number = 0; // 1 byte
    public headerChecksum: number = 0; // 1 byte
    public ROM_Checksum: number = 0; // 2 byte
    public data: Buffer = Buffer.alloc(0x8000);
    public cartRam: Uint8Array = new Uint8Array(0xbfff - 0x9fff);

    constructor() {}

    private checkChecksum(data: Buffer) {
        let sum = 0;
        for (let i = 0x0134; i <= 0x014c; i++) {
            sum = sum - this.data[i] - 1;
        }

        sum = sum & 0xff;

        console.log(
            'Checksum should be: %d\t Checksum is: %d',
            this.headerChecksum,
            sum
        );
        if (this.headerChecksum !== sum) {
            throw new Error('Checksum doesnt match. Exiting');
        }
    }

    public loadCart(stringPath: string) {
        const fspath = path.join(__dirname, stringPath);
        this.data = fs.readFileSync(fspath);
        let i = 0x0100;
        for (let j = 0; j < 4; j++) {
            this.entryPoint[j] = this.data[i];
            i++;
        }

        for (let j = 0; j < 48; j++) {
            this.logo[j] = this.data[i];
            i++;
        }

        for (let j = 0; j < 16; j++) {
            this.title[j] = this.data[i];
            i++;
        }

        for (let j = 0; j < 2; j++) {
            this.newLicenseeCode[j] = this.data[i];
            i++;
        }

        this.SGB_FLAG = this.data[i];
        i++;
        this.cartridgeType = this.data[i];
        i++;
        this.ROM_Size = this.data[i];
        i++;
        this.RAM_Size = this.data[i];
        i++;
        this.destinationCode = this.data[i];
        i++;
        this.oldLicenseeCode = this.data[i];
        i++;
        this.versionNumber = this.data[i];
        i++;
        this.headerChecksum = this.data[i];
        i++;
        this.ROM_Checksum = this.data[i];
        i++;

        //this.printInformation();
        //this.checkChecksum(this.data);
    }

    public read8(address: number) {
        return this.data[address];
    }

    public read16(address: number): number {
        const high = this.data[address + 1];
        const low = this.data[address];
        return ((high << 8) & 0xff00) | (low & 0xff);
    }

    public write8(address: number, byte: number) {
        this.data[address] = byte & 0xff;
    }

    public write16(address: number, value: number): void {
        this.write8(address + 1, (value >> 8) & 0xff);
        this.write8(address, value & 0xff);
    }

    public readRam8(address: number) {
        return this.cartRam[address];
    }

    public readRam16(address: number): number {
        const high = this.cartRam[address + 1];
        const low = this.cartRam[address];
        return ((high << 8) & 0xff00) | (low & 0xff);
    }

    public writeRam8(address: number, byte: number) {
        this.cartRam[address] = byte & 0xff;
    }

    public writeRam16(address: number, value: number): void {
        this.writeRam8(address + 1, (value >> 8) & 0xff);
        this.writeRam8(address, value & 0xff);
    }

    private printInformation() {
        const title = this.title.map(x => String.fromCharCode(x)).join('');
        console.log('Title: %s', title);

        const newLicenseCode = String.fromCharCode(
            this.newLicenseeCode[0],
            this.newLicenseeCode[1]
        );
        console.log(
            'License Code: %s\tPublisher %s',
            newLicenseCode,
            LICENSEE_CODE[newLicenseCode]
        );

        const cartridgeType = this.cartridgeType.toString(16);
        console.log(
            'Cartridge Code: %s\tCartridge Type: %s',
            cartridgeType,
            CARTRIDGE_TYPE[cartridgeType]
        );

        const ROMsizeCode = this.ROM_Size.toString(16);
        console.log(
            'ROM Size Code: %s\tROM Size: %s\tNumber of ROM Banks: %s',
            ROMsizeCode,
            ROM_SIZE[ROMsizeCode].ROM_SIZE,
            ROM_SIZE[ROMsizeCode].NUM_BANKS
        );

        const ram_size = this.RAM_Size.toString(16);
        console.log(
            'RAM_SIZE Code: %s\tSRAM_SIZE : %s',
            ram_size,
            RAM_SIZE[ram_size]
        );
        const destination = this.destinationCode.toString(16);
        console.log(
            'Destination Code: %s\tDestination : %s',
            destination,
            DESTINATION_CODE[destination]
        );
    }
}
