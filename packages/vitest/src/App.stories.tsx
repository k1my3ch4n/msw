import { Meta, StoryFn } from "@storybook/react";
import App from "./App";
import { rest } from "msw";
import { GET_CHAMPION_DATA_RESPONSE, TFT_CHAMP_URL } from "@fixtures/tft";

export default {
  title: "Pages/App",
  component: App,
} as Meta<typeof App>;

const Template: StoryFn<typeof App> = () => <App />;

export const Default = Template.bind({});
Default.storyName = "기본 상태";
Default.parameters = {
  msw: {
    handlers: [
      rest.get(TFT_CHAMP_URL, (_, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({ data: GET_CHAMPION_DATA_RESPONSE })
        );
      }),
    ],
  },
};

export const Loading = Template.bind({});
Loading.storyName = "로딩 중";
Loading.parameters = {
  msw: {
    handlers: [
      rest.get(TFT_CHAMP_URL, (_, res, ctx) => {
        return res(ctx.delay("infinite"));
      }),
    ],
  },
};

export const Error = Template.bind({});
Error.storyName = "에러 발생";
Error.parameters = {
  msw: {
    handlers: [
      rest.get(TFT_CHAMP_URL, (_, res, ctx) => {
        return res(ctx.status(400));
      }),
    ],
  },
};
