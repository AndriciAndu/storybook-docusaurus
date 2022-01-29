import React, { Fragment } from "react";

const format = (arr, type) => arr.map((item) => formatItem(item, type));

const categories = {
  "1": {
    title: "perceivable",
    wcag_desc: "Information and user interface components must be presentable to users in ways they can perceive.",
    govuk_desc: "You need to make sure users can recognise and use your service with the senses that are available to them.",
  },
  "2": {
    title: "operable",
    wcag_desc: "User interface components and navigation must be operable.",
    govuk_desc: "You have to make sure users can find and use your content, regardless of how they choose to access it (for example, using a keyboard or voice commands).",
  },
  "3": {
    title: "understandable",
    wcag_desc: "Information and the operation of the user interface must be understandable.",
    govuk_desc: "You have to make sure people can understand your content and how the service works.",
  },
  "4": {
    title: "robust",
    wcag_desc: "Content must be robust enough that it can be interpreted by a wide variety of user agents, including assistive technologies.",
    govuk_desc: "You must make sure your content can be interpreted reliably by a wide variety of user agents (including reasonably outdated, current and anticipated browsers and assistive technologies).",
  },
};

const subcategories = {
  "1": {
    "1": "Text Alternatives",
    "2": "Time-Based Media",
    "3": "Adaptable",
    "4": "Distinguishable",
  },
  "2": {
    "1": "Keyboard Accessible",
    "2": "Enough Time",
    "3": "Seizures and Physical Reactions",
    "4": "Navigable",
    "5": "Input Modalities",
  },
  "3": {
    "1": "Readable",
    "2": "Predictable",
    "3": "Input Assistance",
  },
  "4": {
    "1": "Compatible",
  },
};

const formatItem = (item, type) => {
  const { title } = item;

  const splitTitle = title.split(" – ");
  const id = splitTitle[0];

  const splitId = id.split(".");
  const categoryId = splitId[0];
  const subcategoryId = splitId[1];

  return {
    ...item,
    categoryId,
    subcategoryId,
    id,
    title: splitTitle[1],
    title_extended: title,
    type,
  }
};

export const renderTitle = ({ id, note, children }) => {
  const item = all[id];

  if (!item) {
    return null;
  }

  const style = {
    padding: "12px 18px",
    marginBottom: "12px",
    borderLeft: "2px solid rgba(3, 3, 3, 0.1)",
    borderRadius: "6px",
    background: "rgba(3, 3, 3, 0.02)",
  }

  return (
    <div style={style}>
      <a href={item.wuhcagUrl} style={ { fontSize: "1.2em" } } target="_blank" rel="noopener noreferrer">
        {`(${item.type}) `}
        {item.title_extended}
      </a>
      {note}
      <br />
      <b style={ { fontWeight: "bolder", color: "#404040" } } >{item.desc}</b>
      {renderChildren(children)}
    </div>
  )
}

export const renderLinks = (id) => {
  const item = all[id];

  if (!item) {
    return null;
  }

  return (
    <Fragment>
      {renderLink(item, "wcagUrl")}
      {renderLink(item, "wcagSuccessUrl")}
      {renderLink(item, "wuhcagUrl")}
    </Fragment>
  )
}

export const renderLink = (item, urlType) => {
  let text = urlType.replace("Url", "");

  return (
    <Fragment>
      <a href={item[urlType]} rel="noopener noreferrer" target="_blank">
        {text}
      </a>
      {" | "}
    </Fragment>
  )
}

const renderChildren = (children) => {
  if (!children) {
    return;
  }

  return (
    <div>
      <hr />
      {children}
    </div>
  )
}

export const a = format([
  {
    wuhcagUrl: "https://www.wuhcag.com/non-text-content/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content",
    title: "1.1.1 – Non-text Content",
    desc: "Provide text alternatives for non-text content, that serves the same purpose.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/audio-only-video-only-prerecorded/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded",
    title: "1.2.1 – Audio-only and Video-only (Pre-recorded)",
    desc: "Provide an alternative to video-only and audio-only content.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/captions-prerecorded/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded",
    title: "1.2.2 – Captions (Pre-recorded)",
    desc: "Provide captions for videos with audio.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/audio-description-media-alternative-prerecorded/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded",
    title: "1.2.3 – Audio Description or Media Alternative (Pre-recorded)",
    desc: "Provide audio description or text transcript for videos with sound.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/info-and-relationships/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships",
    title: "1.3.1 – Info and Relationships",
    desc: "Content, structure and relationships can be programmatically determined.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/meaningful-sequence/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence",
    title: "1.3.2 – Meaningful Sequence",
    desc: "Present content in a meaningful order.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/sensory-characteristics/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics",
    title: "1.3.3 – Sensory Characteristics",
    desc: "Instructions don’t rely solely on sensory characteristics.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/use-of-colour/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/use-of-color",
    title: "1.4.1 – Use of Colour",
    desc: "Don’t use presentation that relies solely on colour.",
  },
  {
    checked: true,
    wuhcagUrl: "https://www.wuhcag.com/audio-control/",
    wcagUrl: "https://www.w3.org/TR/WCAG22/#audio-control",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/audio-control",
    title: "1.4.2 – Audio Control",
    desc: "Don’t play audio automatically.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/keyboard/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/keyboard",
    title: "2.1.1 – Keyboard",
    desc: "All functionality is accessible by keyboard with no specific timings.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/no-keyboard-trap/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap",
    title: "2.1.2 – No Keyboard Trap",
    desc: "Users can navigate to and from all content using a keyboard.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/character-key-shortcuts/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts",
    title: "2.1.4 – Character Key Shortcuts",
    desc: "Allow users to turn off or remap single-key character shortcuts.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/timing-adjustable/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable",
    title: "2.2.1 – Timing Adjustable",
    desc: "Provide user controls to turn off, adjust or extend time limits.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/pause-stop-hide/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide",
    title: "2.2.2 – Pause, Stop, Hide",
    desc: "Provide user controls to pause, stop and hide moving and auto-updating content.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/three-flashes-or-below-threshold/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold",
    title: "2.3.1 – Three Flashes or Below Threshold",
    desc: "No content flashes more than three times per second.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/bypass-blocks/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks",
    title: "2.4.1 – Bypass Blocks",
    desc: "Provide a way for users to skip repeated blocks of content.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/page-titled/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/page-titled",
    title: "2.4.2 – Page Titled",
    desc: "Use helpful and clear page titles.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/focus-order/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/focus-order",
    title: "2.4.3 – Focus Order",
    desc: "Components receive focus in a logical sequence.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/link-purpose-in-context/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context",
    title: "2.4.4 – Link Purpose (In Context)",
    desc: "Every link’s purpose is clear from its text or context.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/focus-visible/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html",
    title: "2.4.7 – Focus Visible",
    desc: "Keyboard focus is visible when used.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/page-break-navigation/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/page-break-navigation",
    title: "2.4.13 – Page Break Navigation",
    desc: "Provide a way to navigate between page break locators.",
  },
  // {
  //   wuhcagUrl: "#",
  //   wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures",
  //   title: "2.5.1 – Pointer Gestures",
  //   desc: "...",
  // },
  // {
  //   wuhcagUrl: "#",
  //   wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation",
  //   title: "2.5.2 – Pointer Cancellation",
  //   desc: "...",
  // },
  {
    wuhcagUrl: "https://www.wuhcag.com/language-of-page/",
    wcagSuccessUrl: "",
    title: "3.1.1 – Language of Page",
    desc: "Page has a language assigned",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/on-focus/",
    wcagSuccessUrl: "",
    title: "3.2.1 – On Focus",
    desc: "Elements do not change when they receive focus.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/on-input/",
    wcagSuccessUrl: "",
    title: "3.2.2 – On Input",
    desc: "Elements do not change when they receive input",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/error-identification/",
    wcagSuccessUrl: "",
    title: "3.3.1 – Error Identification",
    desc: "Clearly identify input errors",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/labels-or-instructions/",
    wcagSuccessUrl: "",
    title: "3.3.2 – Labels or Instructions",
    desc: "Label elements and give instructions",
  },
  {
    checked: true,
    wuhcagUrl: "https://www.wuhcag.com/parsing/",
    wcagSuccessUrl: "",
    title: "4.1.1 – Parsing",
    desc: "No major code errors",
    desc_extended: [
      "Parsing is how user agents, (browsers, assistive technologies) read and interpret a website.",
      "Invalid code might be interpreted differently by different user agents, or it might cause them to fail entirely.",
    ]
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/name-role-value/",
    wcagSuccessUrl: "",
    title: "4.1.2 – Name, Role, Value",
    desc: "Build all elements for accessibility",
  },
], "A");

export const aa = format([
  {
    wuhcagUrl: "https://www.wuhcag.com/captions-live/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/captions-live",
    title: "1.2.4 – Captions (Live)",
    desc: "Add captions to live videos.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/audio-description-prerecorded/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded",
    title: "1.2.5 – Audio Description (Pre-recorded)",
    desc: "Provide audio descriptions for pre-recorded videos.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/orientation/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/orientation",
    title: "1.3.4 – Orientation",
    desc: "Your website adapts to portrait and landscape views.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/identify-input-purpose/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose",
    title: "1.3.5 – Identify Input Purpose",
    desc: "The purpose of input fields must be programmatically determinable.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/contrast-minimum/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum",
    title: "1.4.3 – Contrast (Minimum)",
    desc: "Contrast ratio between text and background is at least 4.5:1.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/resize-text/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/resize-text",
    title: "1.4.4 – Resize Text",
    desc: "Text can be resized to 200% without loss of content or function.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/images-of-text/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/images-of-text",
    title: "1.4.5 – Images of Text",
    desc: "Don’t use images of text.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/reflow/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/reflow",
    title: "1.4.10 – Reflow",
    desc: "Content retains meaning and function without scrolling in two dimensions.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/non-text-contrast/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast",
    title: "1.4.11 – Non-Text Contrast",
    desc: "The contrast between user interface components, graphics and adjacent colours is at least 3:1.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/text-spacing/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/text-spacing",
    title: "1.4.12 – Text Spacing",
    desc: "Content and function retain meaning when users change elements of text spacing.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/content-on-hover-or-focus/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus",
    title: "1.4.13 – Content on Hover or Focus",
    desc: "When hover or focus triggers content to appear, it is dismissible, hoverable and persistent.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/multiple-ways/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways",
    title: "2.4.5 – Multiple Ways",
    desc: "Offer at least two ways to find pages on your website.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/headings-and-labels/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels",
    title: "2.4.6 – Headings and Labels",
    desc: "Headings and labels describe topic or purpose.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/focus-appearance-minimum/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-minimum",
    title: "2.4.11 – Focus Appearance (Minimum)",
    desc: "Focus indicators are clearly distinguishable when active.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/language-of-parts/",
    wcagSuccessUrl: "",
    title: "3.1.2 – Language of Parts",
    desc: "Tell users when the language on a page changes",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/consistent-navigation/",
    wcagSuccessUrl: "",
    title: "3.2.3 – Consistent Navigation",
    desc: "Use menus consistently",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/consistent-identification/",
    wcagSuccessUrl: "",
    title: "3.2.4 – Consistent Identification",
    desc: "Use icons and buttons consistently",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/error-suggestion/",
    wcagSuccessUrl: "",
    title: "3.3.3 – Error Suggestion",
    desc: "Suggest fixes when users make errors",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/error-prevention-legal-financial-data/",
    wcagSuccessUrl: "",
    title: "3.3.4 – Error Prevention (Legal, Financial, Data)",
    desc: "Reduce the risk of input errors for sensitive data",
  },
], "AA");

export const aaa = format([
  {
    wuhcagUrl: "http://www.wuhcag.com/sign-language-pre-recorded/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/sign-language-prerecorded",
    title: "1.2.6 – Sign Language (Pre-recorded)",
    desc: "Provide sign language translations for pre-recorded videos.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/extended-audio-description-pre-recorded/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/extended-audio-description-prerecorded",
    title: "1.2.7 – Extended Audio description (Pre-recorded)",
    desc: "Provide extended audio descriptions for pre-recorded videos.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/media-alternative-pre-recorded/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded",
    title: "1.2.8 – Media Alternative (Pre-recorded)",
    desc: "Provide text alternatives for pre-recorded videos.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/audio-only-live/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/audio-only-live",
    title: "1.2.9 – Audio Only (Live)",
    desc: "Provide alternatives for live audio.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/identify-purpose/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose",
    title: "1.3.6 – Identify Purpose",
    desc: "The purpose of all components must be programmatically determinable.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/contrast-enhanced",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced",
    title: "1.4.6 – Contrast (Enhanced)",
    desc: "Contrast ratio between text and background is at least 7:1.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/low-or-no-background-audio/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/low-or-no-background-audio",
    title: "1.4.7 – Low or No Background Audio",
    desc: "Audio-only content is clear with no or minimal background noise.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/visual-presentation/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation",
    title: "1.4.8 – Visual Presentation",
    desc: "Offer users a range of presentation options for blocks of text.",
  },
  {
    wuhcagUrl: "http://www.wuhcag.com/images-of-text-no-exception/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/images-of-text-no-exception",
    title: "1.4.9 – Images of Text (No Exception)",
    desc: "Don’t use images of text.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/keyboard-no-exception/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/keyboard-no-exception",
    title: "2.1.3 – Keyboard (No Exception)",
    desc: "All functionality is accessible by keyboard with no exceptions.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/no-timing/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/no-timing",
    title: "2.2.3 – No Timing",
    desc: "No time limits on your website.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/interruptions/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/interruptions",
    title: "2.2.4 – Interruptions",
    desc: "Users can postpone or supress non-emergency interruptions.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/re-authenticating/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/re-authenticating",
    title: "2.2.5 – Re-authenticating",
    desc: "Save user data when re-authenticating.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/timeouts/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/timeouts",
    title: "2.2.6 – Timeouts",
    desc: "Warn users about timeouts that cause data loss.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/three-flashes/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/three-flashes",
    title: "2.3.2 – Three Flashes",
    desc: "No content flashes more than three times per second.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/animation-from-interactions/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions",
    title: "2.3.3 – Animation from Interactions",
    desc: "Users can disable motion animation.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/location/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/location",
    title: "2.4.8 – Location",
    desc: "Let users know where they are on your website.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/link-purpose-link-only/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only",
    title: "2.4.9 – Link Purpose (Link Only)",
    desc: "Every link’s purpose is clear from its text.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/section-headings/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/section-headings",
    title: "2.4.10 – Section Headings",
    desc: "Organise content with headings.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/focus-appearance-enhanced/",
    wcagSuccessUrl: "https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced",
    title: "2.4.12 – Focus Appearance (Enhanced)",
    desc: "Focus indicators are more clearly distinguishable when active.",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/unusual-words/",
    wcagSuccessUrl: "",
    title: "3.1.3 – Unusual words",
    desc: "Explain any strange words",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/abbreviations/",
    wcagSuccessUrl: "",
    title: "3.1.4 – Abbreviations",
    desc: "Explain any abbreviations",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/reading-level/",
    wcagSuccessUrl: "",
    title: "3.1.5 – Reading Level",
    desc: "Users with nine years of school can read your content",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/pronunciation/",
    wcagSuccessUrl: "",
    title: "3.1.6 – Pronunciation",
    desc: "Explain any words where meaning is ambiguous without pronunciation",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/change-on-request/",
    wcagSuccessUrl: "",
    title: "3.2.5 – Change on Request",
    desc: "Don’t change elements on your website until users ask",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/help/",
    wcagSuccessUrl: "",
    title: "3.3.5 – Help",
    desc: "Provide detailed help and instructions",
  },
  {
    wuhcagUrl: "https://www.wuhcag.com/error-prevention-all/",
    wcagSuccessUrl: "",
    title: "3.3.6 – Error Prevention (All)",
    desc: "Reduce the risk of all input errors",
  },
], "AAA");

const getAll = () => {
  const result = {};
  const x = [...a, ...aa, ...aaa];

  x.forEach((item) => {
    const { id } = item;

    result[id] = item;
  });

  return result;
};

export const all = getAll();
