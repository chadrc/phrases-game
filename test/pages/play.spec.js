import PlayView from "@/pages/play.vue";
import { makeVueMock } from "@/test/utils";

describe("Play View", () => {
  const { wrapper } = makeVueMock(PlayView, { shallow: true });

  test("is vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("renders regular", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
