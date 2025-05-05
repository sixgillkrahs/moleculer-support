export default class EncryptHelper {
    encrypt(text: string): string;
    decrypt(text: string | null | undefined): string | null | undefined;
    encryptIv(text: string): string;
    decryptIv(text: string): string | null;
    encryptBase64(text: string): string | null;
    decryptBase64(text: string): Buffer | null;
    encryptBase64Object(obj: object): string | null;
    decryptBase64Object(text: string): object | null;
    desEcbEncrypt(plaintext: string, key: string): string;
    desEcbDecrypt(cipherText: string, key: string): string | false;
    hashMD5(plaintext: string): string;
    hashSHA256(plaintext: string): string;
}
