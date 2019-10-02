import Typograf from 'typograf';
import { TypografOptions } from '../interfaces/typograf';
import { NowRequest, NowResponse } from '@now/node';

type TypografRestConfig = {
  text: string,
  options?: TypografOptions,
}

type TypografNowRequest = NowRequest & { body: TypografRestConfig };

const defaultOptions: TypografOptions = {
  locale: ["ru", "en-US"],
  htmlEntity: {
    type: "default",
    onlyInvisible: false,
  }
};

function processText(
  text: string = '',
  options: TypografOptions = defaultOptions,
): string {
  const mergedOptions = {...options, ...defaultOptions};
  const typograf = new Typograf(mergedOptions as any);
  return typograf.execute(text);
}

function main(
  request: TypografNowRequest,
  response: NowResponse,
): void {
  const { text, options } = request.body;

  if (text == null || text.length < 1) {
    response.status(400).send("text must be provided.");
    return;
  }

  const result = processText(text, options);

  response.status(200).send(result);
  return;
}

export default main;
