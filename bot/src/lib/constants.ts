import { join } from 'path';

export const rootDir = /* join(__dirname, '..', '..'); */ process.cwd();
export const srcDir = join(rootDir, 'src');

// Regex
export const cardNameRegex = /\[\[([^\]]+)\]\]/g;
export const manaValueRegex = /\{(.*?)\}/g;

// TTL
export enum RedisTTLDurations {
	SECOND = 1,
	MINUTE = 60,
	HOUR = 3600,
	DAY = 86400,
	WEEK = 604800,
	MONTH = 2592000,
	YEAR = 31536000
}
