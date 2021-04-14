import { shallowMount } from "@vue/test-utils";
it("matches snapshot", () => {
  const wrapper = shallowMount(AppButton);
  expect(wrapper.html()).toMatchSnapshot();
  wrapper.destroy();
});
