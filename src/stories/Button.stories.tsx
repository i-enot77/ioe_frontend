import type { Meta, StoryObj } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"

import { Button } from "../components/Button"
import { ButtonProp } from "../components/types"

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  argTypes: { clickHandler: { action: "clicked" } },
}

export default meta
type Story = StoryObj<typeof Button>

export const FormButton: Story = {
  args: {
    buttonClass:
      "bg-[#87C4E7] rounded-lg text-white w-full py-1 text-base font-bold mt-3",
    children: "Add",
    clickHandler: action("click"),
  },
}

export const AddJobButton = (args: ButtonProp) => (
  <Button {...args}>
    <>
      <FontAwesomeIcon
        icon={faCirclePlus}
        size="sm"
        style={{ color: "#000000" }}
        className="mr-2"
      />
      New Job
    </>
  </Button>
)

AddJobButton.args = {
  buttonClass: "font-bold text-black text-xl bg-[#87C4E7] p-3 rounded",
  children: "New Job",
  clickHandler: action("click"),
}
