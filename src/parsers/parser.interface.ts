import { TranslationCollection } from '../utils/translation.collection';

export interface ParserInterface {
	extract(source: string, filePath: string): TranslationCollection | null;
}

export interface MarkerCustomConfig {
	marker: string;
	filePath: string;
	patterns: MarkerCustomConfigPattern[];
	replace: string;
}

export interface MarkerCustomConfigPattern {
	pattern: string;
	flags: string;
}
