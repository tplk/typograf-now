# typograf-now
[typograf](https://github.com/typograf/typograf) service provided as a serverless function at https://typograf.now.sh/api/process.

## Basic usage
To process text make a POST request to https://typograf.now.sh/api/process with `text` body parameter.

running the following command in the terminal:
```bash
curl -s \
  -d 'text=my "text"' \
  https://typograf.now.sh/api/process
```

results in:
```
my «text»
```

## Configuring typograf
Please refer to [typograf-cli](https://github.com/typograf/typograf-cli#%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3%D1%83%D1%80%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9-%D1%84%D0%B0%D0%B9%D0%BB) and [typograf](https://github.com/typograf/typograf/blob/dev/docs/RULES.en-US.md) documentation to learn more about possible rules.

The service accepts typograf options in the following format:
```ts
interface TypografOptions {
    locale: string | string[];
    htmlEntity?: {
        type: 'default' | 'digit' | 'name';
        onlyInvisible?: boolean;
        list?: string[];
    };
    lineEnding?: 'LF' | 'CRLF' | 'CR';
    enableRule?: string | string[];
    disableRule?: string | string[];
}
```

You can pass custom configuration as `options` parameter:
```
curl -s \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"text": "1/2", "options":{"disableRule": ["common/number/fraction"]}}' \
  https://typograf.now.sh/api/process
```

results in:
```
1/2
```
