const NOP = 0x00;
const JP_a16 = 0xc3;
const DI = 0xf3;
const PUSH_HL = 0xe5;
const XOR_A = 0xaf;

const RLCA = 0x07;

const ADD_HL_BC = 0x09;
const ADD_HL_DE = 0x19;
const ADD_HL_HL = 0x29;
const ADD_HL_SP = 0x39;

const LD_BC_D16 = 0x01;
const LD_DE_D16 = 0x11;
const LD_HL_D16 = 0x21;
const LD_SP_D16 = 0x31;

const LD_A_D8 = 0x3e;
const LD_B_D8 = 0x06;
const LD_C_D8 = 0x0e;
const LD_D_D8 = 0x16;
const LD_E_D8 = 0x1e;
const LD_H_D8 = 0x26;
const LD_L_D8 = 0x2e;

const LD_A_A = 0x7f;
const LD_A_B = 0x78;
const LD_A_C = 0x79;
const LD_A_D = 0x7a;
const LD_A_E = 0x7b;
const LD_A_H = 0x7c;
const LD_A_L = 0x7d;
const LD_A_HL = 0x7e;

const LD_B_A = 0x47;
const LD_B_B = 0x40;
const LD_B_C = 0x41;
const LD_B_D = 0x42;
const LD_B_E = 0x43;
const LD_B_H = 0x44;
const LD_B_L = 0x45;
const LD_B_HL = 0x46;

const LD_C_A = 0x4f;
const LD_C_B = 0x48;
const LD_C_C = 0x49;
const LD_C_D = 0x4a;
const LD_C_E = 0x4b;
const LD_C_H = 0x4c;
const LD_C_L = 0x4d;
const LD_C_HL = 0x4e;

const LD_D_A = 0x57;
const LD_D_B = 0x50;
const LD_D_C = 0x51;
const LD_D_D = 0x52;
const LD_D_E = 0x53;
const LD_D_H = 0x54;
const LD_D_L = 0x55;
const LD_D_HL = 0x56;

const LD_E_A = 0x5f;
const LD_E_B = 0x58;
const LD_E_C = 0x59;
const LD_E_D = 0x5a;
const LD_E_E = 0x5b;
const LD_E_H = 0x5c;
const LD_E_L = 0x5d;
const LD_E_HL = 0x5e;

const LD_H_A = 0x67;
const LD_H_B = 0x60;
const LD_H_C = 0x61;
const LD_H_D = 0x62;
const LD_H_E = 0x63;
const LD_H_H = 0x64;
const LD_H_L = 0x65;
const LD_H_HL = 0x66;

const LD_L_A = 0x6f;
const LD_L_B = 0x68;
const LD_L_C = 0x69;
const LD_L_D = 0x6a;
const LD_L_E = 0x6b;
const LD_L_H = 0x6c;
const LD_L_L = 0x6d;
const LD_L_HL = 0x6e;

const LD_HL_A = 0x77;
const LD_HL_B = 0x70;
const LD_HL_C = 0x71;
const LD_HL_D = 0x72;
const LD_HL_E = 0x73;
const LD_HL_H = 0x74;
const LD_HL_L = 0x75;
const LD_HL_D8 = 0x36;

const LD_A16_SP = 0x08;
const LD_HLD_A = 0x32;

const INC_A = 0x3c;
const INC_B = 0x04;
const INC_C = 0x0c;
const INC_D = 0x14;
const INC_E = 0x1c;
const INC_H = 0x24;
const INC_L = 0x2c;

const INC_BC = 0x03;
const INC_DE = 0x13;
const INC_HL = 0x23;
const INC_SP = 0x33;

const DEC_A = 0x3d;
const DEC_B = 0x05;
const DEC_C = 0x0d;
const DEC_D = 0x15;
const DEC_E = 0x1d;
const DEC_H = 0x25;
const DEC_L = 0x2d;

const CP_A = 0xbf;
const CP_B = 0xb8;
const CP_C = 0xb9;
const CP_D = 0xba;
const CP_E = 0xbb;
const CP_H = 0xbc;
const CP_L = 0xbd;
const CP_HL = 0xbe;
const CP_D8 = 0xfe;

const JR_NZ_R8 = 0x20;

const JP_NZ_A16 = 0xc2;
const JP_Z_A16 = 0xca;
const JP_NC_A16 = 0xd2;
const JP_C_A16 = 0xda;

const ADC_A_A = 0x8f;
const ADC_A_B = 0x88;
const ADC_A_C = 0x89;
const ADC_A_D = 0x8a;
const ADC_A_E = 0x8b;
const ADC_A_H = 0x8c;
const ADC_A_L = 0x8d;
const ADC_A_HL = 0x8e;
const ADC_A_D8 = 0xce;

const SUB_A = 0x97;
const SUB_B = 0x90;
const SUB_C = 0x91;
const SUB_D = 0x92;
const SUB_E = 0x93;
const SUB_H = 0x94;
const SUB_L = 0x95;
const SUB_HL = 0x96;
const SUB_D8 = 0xd6;

const RRA = 0x1f;
const OR_B = 0xb0;

export {
    NOP,
    SUB_A,
    SUB_B,
    SUB_C,
    SUB_D,
    SUB_E,
    SUB_H,
    SUB_L,
    SUB_HL,
    SUB_D8,
    ADC_A_A,
    ADC_A_B,
    ADC_A_C,
    ADC_A_D,
    ADC_A_E,
    ADC_A_H,
    ADC_A_L,
    ADC_A_HL,
    ADC_A_D8,
    JP_NZ_A16,
    JP_Z_A16,
    JP_NC_A16,
    JP_C_A16,
    ADD_HL_BC,
    ADD_HL_DE,
    ADD_HL_HL,
    ADD_HL_SP,
    RLCA,
    JP_a16,
    DI,
    PUSH_HL,
    LD_BC_D16,
    LD_DE_D16,
    LD_HL_D16,
    LD_SP_D16,
    XOR_A,
    LD_A16_SP,
    LD_A_D8,
    LD_B_D8,
    LD_C_D8,
    LD_D_D8,
    LD_E_D8,
    LD_H_D8,
    LD_L_D8,
    LD_HLD_A,
    LD_HL_A,
    LD_HL_B,
    LD_HL_C,
    LD_HL_D,
    LD_HL_E,
    LD_HL_H,
    LD_HL_L,
    LD_HL_D8,
    LD_A_A,
    LD_A_B,
    LD_A_C,
    LD_A_D,
    LD_A_E,
    LD_A_H,
    LD_A_L,
    LD_A_HL,
    LD_B_A,
    LD_B_B,
    LD_B_C,
    LD_B_D,
    LD_B_E,
    LD_B_H,
    LD_B_L,
    LD_B_HL,
    LD_C_A,
    LD_C_B,
    LD_C_C,
    LD_C_D,
    LD_C_E,
    LD_C_H,
    LD_C_L,
    LD_C_HL,
    LD_D_A,
    LD_D_B,
    LD_D_C,
    LD_D_D,
    LD_D_E,
    LD_D_H,
    LD_D_L,
    LD_D_HL,
    LD_E_A,
    LD_E_B,
    LD_E_C,
    LD_E_D,
    LD_E_E,
    LD_E_H,
    LD_E_L,
    LD_E_HL,
    LD_H_A,
    LD_H_B,
    LD_H_C,
    LD_H_D,
    LD_H_E,
    LD_H_H,
    LD_H_L,
    LD_H_HL,
    LD_L_A,
    LD_L_B,
    LD_L_C,
    LD_L_D,
    LD_L_E,
    LD_L_H,
    LD_L_L,
    LD_L_HL,
    INC_A,
    INC_B,
    INC_C,
    INC_D,
    INC_E,
    INC_H,
    INC_L,
    INC_BC,
    INC_DE,
    INC_HL,
    INC_SP,
    DEC_A,
    DEC_B,
    DEC_C,
    DEC_D,
    DEC_E,
    DEC_H,
    DEC_L,
    CP_A,
    CP_B,
    CP_C,
    CP_D,
    CP_E,
    CP_H,
    CP_L,
    CP_HL,
    CP_D8,
    JR_NZ_R8,
    RRA,
    OR_B,
};

interface Opcodes {
    [key: string]: string;
}

export const OPCODES_DEFAULT_NAMES: Opcodes = {
    0x00: 'NOP',
    0x01: 'LD BC,d16',
    0x02: 'LD (BC),A',
    0x03: 'INC BC',
    0x04: 'INC B',
    0x05: 'DEC B',
    0x06: 'LD B,d8',
    0x07: 'RLCA',
    0x08: 'LD (a16),SP',
    0x09: 'ADD HL,BC',
    0x0a: 'LD A,(BC)',
    0x0b: 'DEC BC',
    0x0c: 'INC C',
    0x0d: 'DEC C',
    0x0e: 'LD C,d8',
    0x0f: 'RRCA',
    0x10: 'STOP 0',
    0x11: 'LD DE,d16',
    0x12: 'LD (DE),A',
    0x13: 'INC DE',
    0x14: 'INC D',
    0x15: 'DEC D',
    0x16: 'LD D,d8',
    0x17: 'RLA',
    0x18: 'JR r8',
    0x19: 'ADD HL,DE',
    0x1a: 'LD A,(DE)',
    0x1b: 'DEC DE',
    0x1c: 'INC E',
    0x1d: 'DEC E',
    0x1e: 'LD E,d8',
    0x1f: 'RRA',
    0x20: 'JR NZ,r8',
    0x21: 'LD HL,d16',
    0x22: 'LD (HL+),A',
    0x23: 'INC HL',
    0x24: 'INC H',
    0x25: 'DEC H',
    0x26: 'LD H,d8',
    0x27: 'DAA',
    0x28: 'JR Z,r8',
    0x29: 'ADD HL,HL',
    0x2a: 'LD A,(HL+)',
    0x2b: 'DEC HL',
    0x2c: 'INC L',
    0x2d: 'DEC L',
    0x2e: 'LD L,d8',
    0x2f: 'CPL',
    0x30: 'JR NC,r8',
    0x31: 'LD SP,d16',
    0x32: 'LD (HL-),A',
    0x33: 'INC SP',
    0x34: 'INC (HL)',
    0x35: 'DEC (HL)',
    0x36: 'LD (HL),d8',
    0x37: 'SCF',
    0x38: 'JR C,r8',
    0x39: 'ADD HL,SP',
    0x3a: 'LD A,(HL-)',
    0x3b: 'DEC SP',
    0x3c: 'INC A',
    0x3d: 'DEC A',
    0x3e: 'LD A,d8',
    0x3f: 'CCF',
    0x40: 'LD B,B',
    0x41: 'LD B,C',
    0x42: 'LD B,D',
    0x43: 'LD B,E',
    0x44: 'LD B,H',
    0x45: 'LD B,L',
    0x46: 'LD B,(HL)',
    0x47: 'LD B,A',
    0x48: 'LD C,B',
    0x49: 'LD C,C',
    0x4a: 'LD C,D',
    0x4b: 'LD C,E',
    0x4c: 'LD C,H',
    0x4d: 'LD C,L',
    0x4e: 'LD C,(HL)',
    0x4f: 'LD C,A',
    0x50: 'LD D,B',
    0x51: 'LD D,C',
    0x52: 'LD D,D',
    0x53: 'LD D,E',
    0x54: 'LD D,H',
    0x55: 'LD D,L',
    0x56: 'LD D,(HL)',
    0x57: 'LD D,A',
    0x58: 'LD E,B',
    0x59: 'LD E,C',
    0x5a: 'LD E,D',
    0x5b: 'LD E,E',
    0x5c: 'LD E,H',
    0x5d: 'LD E,L',
    0x5e: 'LD E,(HL)',
    0x5f: 'LD E,A',
    0x60: 'LD H,B',
    0x61: 'LD H,C',
    0x62: 'LD H,D',
    0x63: 'LD H,E',
    0x64: 'LD H,H',
    0x65: 'LD H,L',
    0x66: 'LD H,(HL)',
    0x67: 'LD H,A',
    0x68: 'LD L,B',
    0x69: 'LD L,C',
    0x6a: 'LD L,D',
    0x6b: 'LD L,E',
    0x6c: 'LD L,H',
    0x6d: 'LD L,L',
    0x6e: 'LD L,(HL)',
    0x6f: 'LD L,A',
    0x70: 'LD (HL),B',
    0x71: 'LD (HL),C',
    0x72: 'LD (HL),D',
    0x73: 'LD (HL),E',
    0x74: 'LD (HL),H',
    0x75: 'LD (HL),L',
    0x76: 'HALT',
    0x77: 'LD (HL),A',
    0x78: 'LD A,B',
    0x79: 'LD A,C',
    0x7a: 'LD A,D',
    0x7b: 'LD A,E',
    0x7c: 'LD A,H',
    0x7d: 'LD A,L',
    0x7e: 'LD A,(HL)',
    0x7f: 'LD A,A',
    0x80: 'ADD A,B',
    0x81: 'ADD A,C',
    0x82: 'ADD A,D',
    0x83: 'ADD A,E',
    0x84: 'ADD A,H',
    0x85: 'ADD A,L',
    0x86: 'ADD A,(HL)',
    0x87: 'ADD A,A',
    0x88: 'ADC A,B',
    0x89: 'ADC A,C',
    0x8a: 'ADC A,D',
    0x8b: 'ADC A,E',
    0x8c: 'ADC A,H',
    0x8d: 'ADC A,L',
    0x8e: 'ADC A,(HL)',
    0x8f: 'ADC A,A',
    0x90: 'SUB B',
    0x91: 'SUB C',
    0x92: 'SUB D',
    0x93: 'SUB E',
    0x94: 'SUB H',
    0x95: 'SUB L',
    0x96: 'SUB (HL)',
    0x97: 'SUB A',
    0x98: 'SBC A,B',
    0x99: 'SBC A,C',
    0x9a: 'SBC A,D',
    0x9b: 'SBC A,E',
    0x9c: 'SBC A,H',
    0x9d: 'SBC A,L',
    0x9e: 'SBC A,(HL)',
    0x9f: 'SBC A,A',
    0xa0: 'AND B',
    0xa1: 'AND C',
    0xa2: 'AND D',
    0xa3: 'AND E',
    0xa4: 'AND H',
    0xa5: 'AND L',
    0xa6: 'AND (HL)',
    0xa7: 'AND A',
    0xa8: 'XOR B',
    0xa9: 'XOR C',
    0xaa: 'XOR D',
    0xab: 'XOR E',
    0xac: 'XOR H',
    0xad: 'XOR L',
    0xae: 'XOR (HL)',
    0xaf: 'XOR A',
    0xb0: 'OR B',
    0xb1: 'OR C',
    0xb2: 'OR D',
    0xb3: 'OR E',
    0xb4: 'OR H',
    0xb5: 'OR L',
    0xb6: 'OR (HL)',
    0xb7: 'OR A',
    0xb8: 'CP B',
    0xb9: 'CP C',
    0xba: 'CP D',
    0xbb: 'CP E',
    0xbc: 'CP H',
    0xbd: 'CP L',
    0xbe: 'CP (HL)',
    0xbf: 'CP A',
    0xc0: 'RET NZ',
    0xc1: 'POP BC',
    0xc2: 'JP NZ,a16',
    0xc3: 'JP a16',
    0xc4: 'CALL NZ,a16',
    0xc5: 'PUSH BC',
    0xc6: 'ADD A,d8',
    0xc7: 'RST 00H',
    0xc8: 'RET Z',
    0xc9: 'RET',
    0xca: 'JP Z,a16',
    0xcc: 'CALL Z,a16',
    0xcd: 'CALL a16',
    0xce: 'ADC A,d8',
    0xcf: 'RST 08H',
    0xd0: 'RET NC',
    0xd1: 'POP DE',
    0xd2: 'JP NC,a16',
    0xd4: 'CALL NC,a16',
    0xd5: 'PUSH DE',
    0xd6: 'SUB d8',
    0xd7: 'RST 10H',
    0xd8: 'RET C',
    0xd9: 'RETI',
    0xda: 'JP C,a16',
    0xdc: 'CALL C,a16',
    0xde: 'SBC A,d8',
    0xdf: 'RST 18H',
    0xe0: 'LDH (a8),A',
    0xe1: 'POP HL',
    0xe2: 'LD (C),A',
    0xe5: 'PUSH HL',
    0xe6: 'AND d8',
    0xe7: 'RST 20H',
    0xe8: 'ADD SP,r8',
    0xe9: 'JP HL',
    0xea: 'LD (a16),A',
    0xee: 'XOR d8',
    0xef: 'RST 28H',
    0xf0: 'LDH A,(a8)',
    0xf1: 'POP AF',
    0xf2: 'LD A,(C)',
    0xf3: 'DI',
    0xf5: 'PUSH AF',
    0xf6: 'OR d8',
    0xf7: 'RST 30H',
    0xf8: 'LD HL,SP+r8',
    0xf9: 'LD SP,HL',
    0xfa: 'LD A,(a16)',
    0xfb: 'EI',
    0xfe: 'CP d8',
    0xff: 'RST 38H',
};
