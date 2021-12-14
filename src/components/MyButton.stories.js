import MyButton from "./MyButton.vue";

export default { title: "MyButton", component: MyButton };

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: `<MyButton v-bind="$props" /> `,
});

export const Primary = Template.bind({});
Primary.args = {};
