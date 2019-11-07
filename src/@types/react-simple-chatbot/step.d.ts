declare module 'react-simple-chatbot/step' {
  export type Id = string | number;
  export type Value = string | number;
  export type Milliseconds = number;

  interface MessageArgument {
    previousValue: Value;
    steps: [];
  }
  interface TriggerArgument {
    value: Value;
    steps: Step[];
  }

  interface TriggerProp {
    /**
     * Returns the id of the Step to trigger
     */
    trigger?: (arg: TriggerArgument) => Id | Id;
  }

  interface MetadataProp {
    /**
     * Set of key-value pairs that you can attach to an object.
     * This can be useful for storing additional information about the object
     * in a structured format.
     */
    metadata?: object;
  }

  interface HideInputProp {
    /**
     * Hide text input when step is triggered.
     */
    hideInput?: boolean;
  }

  interface DelayProp {
    /**
     * Set the delay time to message be shown (in ms)
     */
    delay?: Milliseconds;
  }

  interface EndProp {
    /**
     * Indicate that this step is the last
     * @default false
     */
    end?: boolean;
  }

  interface StepBase {
    /**
     * The step id. Required for any step
     */
    id: Id;

    /**
     * Overwrite the input placeholder
     */
    placeholder?: string;
  }

  interface MessageProp {
    /**
     * The text message
     */
    message: (arg: MessageArgument) => string | string;
  }
  export interface TextStep
    extends StepBase,
      MessageProp,
      TriggerProp,
      DelayProp,
      MetadataProp {
    inputAttributes?: HTMLAttributes<HTMLInputElement>;
  }

  export interface UpdateStep extends StepBase, TriggerProp, MetadataProp {
    /**
     * The id of next step to be updated
     */
    update: Id;
  }

  export interface CustomStepProps {
    step?: Step;
    steps?: Step[];
    previousStep?: Step;
    triggerNextStep: () => void;
  }

  export interface CustomStepComponent<AsMessage extends boolean> {
    /**
     * Custom React Component.
     */
    component: AsMessage extends true
      ? ComponentType<CustomStepProps>
      : ReactNode;

    /**
     * Indicate that the component will be displayed as a text step
     */
    asMessage: AsMessage;
  }

  export interface CustomStep
    extends StepBase,
      TriggerProp,
      CustomStepComponent<true | false>,
      DelayProp,
      EndProp,
      HideInputProp {
    /**
     * Indicate that component will be replaced by the next step.
     */
    replace?: boolean;

    /**
     * Indicate that you waiting some action. You must use the triggerNextStep prop in your component to execute the action.
     */
    waitAction?: boolean;
  }

  export interface UserStep
    extends StepBase,
      TriggerProp,
      MetadataProp,
      EndProp {
    /**
     * Indicate that you waiting a user type action.
     */
    user: boolean;

    /**
     * Function to validate the text typed by the user.
     */
    validator?: (input: string) => boolean;
  }

  export type Step =
    | TextStep
    | UserStep
    | OptionsStep
    | CustomStep
    | UpdateStep;
}
