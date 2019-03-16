import MenuBar from "@/components/MenuBar.vue";
import { makeVueMock } from "@/test/utils";

describe("MenuBar", () => {
  const { wrapper } = makeVueMock(MenuBar, {
    shallow: true
  });

  test("is vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("renders regular", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
