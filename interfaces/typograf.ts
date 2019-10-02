type LineEnding = 'LF' | 'CRLF' | 'CR';
type Mode = 'default' | 'digit' | 'name';

interface HtmlEntity {
    type: Mode;
    onlyInvisible?: boolean;
    list?: string[];
}

export interface TypografOptions {
    locale: string | string[];
    htmlEntity?: HtmlEntity;
    lineEnding?: LineEnding;
    enableRule?: string | string[];
    disableRule?: string | string[];
}
