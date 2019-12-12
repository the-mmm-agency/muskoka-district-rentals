declare module 'react-simple-chatbot' {
import {
  CSSProperties,
  Component,
  HTMLAttributes,
  ReactNode
} from 'react'
import {
  Milliseconds,
  Step
} from 'react-simple-chatbot/step'
import { CSSProp } from 'styled-components'

    export interface Option extends TriggerProp {
    /**
     * The label for the option
     */
    label: string;
    /**
     * The value for the option
     */
    value: string;
  }

  type VoidFunction<T> = (args: T) => void;
  interface EndHandlerArgument {
    steps: Step[];
    values: Value[];
  }
  export type EndHandler = VoidFunction<EndHandlerArgument>;
  export interface ToggleFloatingArgument {
    opened: boolean;
  }

  export type ToggleFloating = VoidFunction<ToggleFloatingArgument>;
  export interface SpeechSynthesis {
    /**
     * Enable instant text-to-speech with voice
     * @default false
     */
    enable?: boolean;

    /**
     * Speech synthesis language.
     * @default 'en'
     */
    lang?: string;

    /**
     * The voice to use
     */
    voice?: SpeechSynthesisVoice;
  }
  export interface ChatBotProps {
    /**
     * The style object to use to override the avatar element.
     */
    avatarStyle?: CSSProperties;

    /**
     * Bot image source
     */
    botAvatar?: string;

    /**
     * The delay time of bot messages in milliseconds.
     * @default 1000
     */
    botDelay?: Milliseconds;

    /**
     * The style object used to override the option element.
     */
    bubbleOptionStyle?: CSSProperties;

    /**
     * The style object used to override the bubble element.
     */
    bubbleStyle?: CSSProperties;

    /**
     * Rendered steps will be cached in localStorage.
     * The cache will be clean automatically when you get the final step.
     * Also, you can do it manually using localStorage.removeItem('rsc_cache').
     * @default false
     */
    cache?: boolean;

    /**
     * Cache name to be used in localStorage.
     * @default rsc_cache
     */
    cacheName?: string;

    /**
     * The class name of the root element.
     */
    className?: string;

    /**
     * The style object to use to override the scroll element.
     */
    contentStyle?: CSSProperties;

    /**
     * The delay time of custom messages in ms.
     * @default 1000
     */
    customDelay?: number;

    /**
     * The style object to use to override the custom step element.
     */
    customStyle?: CSSProperties;

    /**
     * Enable mobile input auto focus for user steps
     * @default false
     */
    enableMobileAutoFocus?: boolean;

    /**
     * Enables smooth scrolling. Uses ScrollToOptions.behavior smooth on
     * [window|element].scroll(). Can be polyfilled.
     * @default false
     */
    enableSmoothScroll?: boolean;

    /**
     * Render chatbot with a floating button.
     * @default false
     */
    floating?: boolean;

    /**
     * Override the floating icon.
     */
    floatingIcon?: string | ReactNode;

    /**
     * The style object to use to override the floating element.
     * This will also override the chatbot contanaier styles
     * (left, right, bottom, top and transformOrigin)
     */
    floatingStyle?: CSSProperties;

    /**
     * The style object to use to override the footer element.
     */
    footerStyle?: CSSProperties;

    /**
     * The callback function when chat ends.
     */
    handleEnd?: EndHandler;

    /**
     * Override the default header element.
     */
    headerComponent?: ReactNode;

    /**
     * Override header title.
     */
    headerTitle?: string;

    /**
     * Hide the bot avatar.
     */
    hideBotAvatar?: boolean;

    /**
     * Hide the header.
     */
    hideHeader?: boolean;

    /**
     * Hide the submit button.
     */
    hideSubmitButton?: boolean;

    /**
     * Hide the user avatar.
     */
    hideUserAvatar?: boolean;

    /**
     * Set the global attributes on the input field.
     */
    inputAttributes?: HTMLAttributes<HTMLInputElement>;

    /**
     * The style object to use to override the input element.
     */
    inputStyle?: CSSProperties;

    /**
     * Override the default opened state.
     * This prop can just be used if floating is true.
     * You must use the callback prop toggleFloating to update the opened prop
     */
    opened?: boolean;

    /**
     * Input placeholder.
     * @default 'Type the message'
     */
    placeholder?: string;

    /**
     * Enable speech recognition for user step.
     * @default false
     */
    recognitionEnable?: boolean;

    /**
     * Speech recognition language.
     * @default 'en'
     */
    recognitionLang?: string;

    /**
     * Chatbot speech recognition placeholder.
     * @default 'Listening'
     */
    recognitionPlaceholder?: string;

    /**
     * Enable text to speech
     */
    speechSynthesis?: SpeechSynthesis;

    /**
     * The steps to display
     */
    steps: Step[];

    /**
     * The style object to use to override the root element.
     */
    style?: CSSProperties;

    /**
     * The style object to use to override the submit button element.
     */
    submitButtonStyle?: CSSProperties;

    /**
     * Must be used with opened prop.
     * You must use it to change your opened prop using your
     * custom function like myToggleFloating({opened})
     */
    toggleFloating?: ToggleFloating;

    /**
     * User image source.
     */
    userAvatar?: string;

    /**
     * The delay time of user messages.
     */
    userDelay?: Milliseconds;
  }

  export default class ChatBot extends Component<ChatBotProps> {}
}
