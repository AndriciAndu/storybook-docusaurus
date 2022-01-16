---
sidebar_label: 'a11y checklist'
sidebar_position: 1
title: "a11y checklist"
---

import { Fragment } from "react";
import { renderTitle } from "./items";

export const Title = ({ id, note, children }) => <Fragment>{renderTitle({ id, note, children })}</Fragment>;


## God hates this

<Title id="1.4.2" />

<Title id="3.2.1" note=" -- partial rules apply">

*   There are no automatic pop-ups;

</Title>


## Just don't

<Title id="1.4.5" />

<Title id="1.4.9" />


## User Customization & Control

<Title id="2.1.4">

*   Don’t use single-key character shortcuts
*   If you really want/need to:
    *   give users a way to turn off the shortcut;
    *   allow users to remap the shortcut to use non-character keys; or
    *   ensure the shortcut only works when an element has focus.

</Title>

<Title id="2.2.1">

*   If content on your website uses a time limit, give users the option to:
    *   turn off the time limit before it begins (for example, a landing page before the time-limited page
        can display a message that shows users what to do); or
    *   adjust the time limit before it begins, over a range of at least ten times the default setting
        (you can do this with a landing page too); or
    *   extend the period at least twenty seconds before it expires. This must be a simple action
        like clicking a button and must be available to use at least ten times.
*   If your website has moving or animated text, users must be able to pause the movement.
*   If your website has a feature that is automatically updated (for example, with the latest football scores),
    you must allow users to delay the frequency of the updates by at least ten times the default setting.

</Title>

<Title id="2.2.2">

*   Ensure moving, blinking or scrolling content has a control to pause, stop or hide it.
*   Ensure auto-updating content has a control to pause, stop, hide or control the frequency of updates.

</Title>

<Title id="2.2.4">

*   Don’t interrupt users, other than for emergencies.
*   If you really want to interrupt users:
    *   provide an option for turning off all but emergency interruptions (for example, by a
           ‘preferences’ or ‘accessibility’ page where choices persist for the user’s session);
    *   allow users to postpone all updates and interruptions; or
    *   allow users to request updates rather than receive them automatically.
*   Don’t use an automatic redirect or refresh function based on a time delay (for example, if a
    webpage has moved, do not redirect users to the new page after a certain amount of time).

</Title>

<Title id="1.4.8" note=" -- partial rules apply">

*   Users can select background and foreground colours;

</Title>


<Title id="2.3.3" note=" -- partial rules apply">

*   Allow users to disable all non-essential motion animation.

</Title>


## Uncategorized

<Title id="2.2.3">

*   Ensure there’s no time-limited content on your website.

</Title>

<Title id="2.2.6">

*   Where possible, allow users 20 hours before a timeout removes their data
*   Warn users of the duration of any timeout period at the beginning of the task

</Title>

<Title id="2.2.5">

*   When you ask a user to re-authenticate their identity, ensure the user can continue exactly
    as before with saved data (for example, their shopping basket contents, input into forms
    or accessibility options).

</Title>


## Basics

<Title id="4.1.1" />


<Title id="4.1.2">

*   Use HTML specifications for any script you author for your website.
*   If you use a plugin or other element authored by a third party, make sure it uses valid HTML markup.

</Title>


## Design

### Consistency

<Title id="3.2.4">

*   Any icons used are consistent (for example, ‘Print page’ or Twitter link); and
*   Elements with the same function are labelled and named consistently; or
*   Elements with the same function have a consistent text alternative.

</Title>


### Non-text content

<Title id="1.3.3">

*   Use text labels to elements in addition to sensory characteristics
*   Don’t use instructions that only use sensory characteristics
*   Avoid instructions that rely on sound

</Title>

<Title id="1.4.1">

*   Ensure no instructions rely on colour alone
*   Ensure that no information (like charts and graphs) relies on colour alone

</Title>


### Color & Contrast

<Title id="1.4.3">

Make sure the contrast ratio between your text and background is at least 4.5:1.
*   Use a light background and dark text; or
*   Use a dark background and light text; and
*   Use a colour contrast checker to verify your choice.

</Title>

<Title id="1.4.6">

Make sure the contrast ratio between your text and background is at least 7:1.
*   Use a light background and dark text; or
*   Use a dark background and light text; and
*   Use a colour contrast checker to verify your choice.

</Title>

<Title id="1.4.11">

When a component receives keyboard focus:
*   Ensure user controls have a contrast of at least 3:1 to the colour around them;
*   Where controls change colour on focus or use, ensure the colours used have
    a contrast of at least 3:1; and
*   Ensure all graphics (for example icons, graphs and charts) have a contrast of
    at least 3:1 to the colour around them.

</Title>


### Focus States

<Title id="2.4.7">
When an element has keyboard focus, show a visual indication.
</Title>

<Title id="2.4.11">

When a component receives keyboard focus:
*   The focus indicator has a contrast ratio of at least 3:1 between focused and unfocused states;
*   The focus indicator has a contrast ratio of at least 3:1 against adjacent colours;
*   The element within focus isn’t hidden; and
*   The focus indicator area: Has an outline that’s at least 1 CSS pixel thick; or Has a shape
    that’s at least the area of a 4 CSS pixel-thick line;

</Title>

<Title id="2.4.12">

When a component receives keyboard focus:
*   The focus indicator has a contrast ratio of at least 4.5:1 between focused and unfocused states;
*   The element within focus isn’t hidden; and
*   The focus indicator area is at least 2 CSS pixels around the perimeter.

</Title>

<Title id="3.2.1">

*   Ensure no element changes purely by receiving focus.
*   Avoid both behavioural and visual modifications.
*   Ensure that:
    *   Links don’t open automatically on focus; and
    *   Forms don’t submit without the user taking action (such as clicking the ‘Submit’ button); and
    *   There are no automatic pop-ups; and
    *   Focus never jumps to another element automatically; and
    *   No other action that occurs on focus alone causes the page to change.

</Title>


### Typography

<Title id="1.4.12">

*   Line height to at least 1.5 times the font size;
*   Paragraph spacing to at least 2 times the font size;
*   Letter spacing to at least 0.12 times the font size; and
*   Word spacing to at least 0.16 times the font size.

</Title>

<Title id="1.4.4">

*   Users can resize text content in their web browser up to 200% without loss of meaning or function.
*   *Make sure your resized text doesn’t require the user to scroll horizontally and you fulfil part
    of 1.4.8 – Visual Presentation for Level AAA.*

</Title>

<Title id="1.4.8">

The following five features are cumulative, as all must be in place to pass:
*   Users can select background and foreground colours; and
*   Text blocks are no wider than 80 characters; and
*   Text is not justified to both sides of the webpage; and
*   Line spacing is at least space-and-a-half within paragraphs and paragraph spacing is
    at least 1.5 times larger than line spacing
*   Text can be resized in a browser up to 200% without requiring the user to scroll horizontally

</Title>


### Animations

<Title id="2.2.2">

*   Ensure moving, blinking or scrolling content has a control to pause, stop or hide it.
*   Ensure auto-updating content has a control to pause, stop, hide or control the frequency of updates.

</Title>

<Title id="2.3.1" />

<Title id="2.3.2" />

<Title id="2.3.3">

*   Don’t use motion animation on your website; or
*   Allow users to disable all non-essential motion animation.

</Title>


### Page Header Meta

<Title id="2.4.2" />

<Title id="3.1.1" />


### General Layout

<Title id="1.3.1">

*   Break up content with subheadings for new sections
*   Mark headings with HTML header tags
*   Use lists, tables and other formats where needed
*   Use the correct HTML for all structural elements
*   Use valid HTML everywhere
*   Use clear labels and alternative text on forms

</Title>

<Title id="1.3.2">

*   Present all content in a meaningful order
*   Separate navigation menus from the content
*   Use paragraphs in order
*   Nest headings from H1 downwards to show their relative importance
*   Choose whether a list needs numbering or not
*   Use valid HTML

</Title>

<Title id="2.4.3">
Ensure the focus order of each web page follows a sequence that preserves the meaning and functionality of the page.
</Title>

<Title id="3.2.3">

*   Keep navigation menus in the same location on all pages; and
*   Present the options in navigation menus in the same order on all pages; and
*   Keep all other standard elements (for example, your search box) in the same location on all pages.

</Title>

<Title id="2.4.5">

*   Adding a sitemap page which links to every page on your website; and
*   Including a search function on every page (by adding it to the header); and
*   Providing a clear and consistent main navigation menu.

</Title>

<Title id="2.4.8">

*   Use breadcrumbs to help with navigation. Show the sequence a user is following and
    where they are in that sequence. For example, You are here: Home > Fish > Bass; and
*   Add a sitemap page to your website (see Multiple Ways) so your users have another
    way of finding what they want. Add a link to the sitemap somewhere prominent like the header.

</Title>

<Title id="2.4.4">

*   The purpose of the link is clear from the link text (for example, ‘My blog’); or
*   The purpose of the link is clear from the surrounding content, meaning the same
    sentence, paragraph or cell in a table (for example, ‘Visit my blog’); or
*   If the link is an image, the alt text of the image makes the link purpose clear
    (for example, ‘Luke McGrath – Visit my blog’); and
*   Links with the same destination have the same description (but links don’t share
    a description if they point to different places).

</Title>

<Title id="2.4.9">

*   The destination of the link is clear from the link text (for example, ‘My blog’); or
*   If the link is an image, the alt text of the image makes the link destination clear
    (for example, ‘Luke McGrath – Visit my blog’); and
*   Links with the same destination have the same description (but links don’t share a
    description if they point to different places).

</Title>

<Title id="3.1.2">

*   Set your website’s main language by meta tag (see Guideline 3.1.1).
*   Add a language attribute to content that is not in the main language.
*   *If you have an alternative language version or translation of some content,
    link to it with the name of the language in that language (for example, ‘Francais’,
    ‘Deutsch’) and add a language tag to the link.*

</Title>

<Title id="1.3.6">

*   Use ARIA landmarks to define regions of each page
*   Use HTML markup to identify links, icons and user interface components

</Title>

<Title id="2.4.13">

If your content has page break locators, provide users with a way to navigate to and between them:
*   In HTML you can add page list navigation using &lt;nav role=”doc-pagelist”>
*   You could then add designations using &lt;span id=”pg1”>

</Title>

<Title id="1.3.4">

*   All content retains meaning when switching orientation
*   All content retains function when switching orientation

</Title>

<Title id="1.4.10">

When users enlarge content up to 400% of the default size, they should not have to scroll
in their browser in more than one direction – horizontally and vertically.
*   Ensure vertical content doesn’t require a horizontal scroll at a width of 320 CSS pixels
*   Ensure horizontal content doesn’t require a vertical scroll at a height of 256 CSS pixels

</Title>


### Specific Layout

<Title id="2.4.6">

*   Use descriptive headings and subheadings in content where appropriate (a change in topic or purpose)
*   Use descriptive labels on controls and input fields

</Title>

<Title id="2.4.10">
Add a heading for every new thought or topic in your content (for example, a travel article
may have headings to indicate the distinct sections on dining, transportation, and lodging).
</Title>

<Title id="2.4.1">

*   Add a visible ‘Skip to Content’ link to all pages on your website that sends users to the
    start of the main content on each page; or
*   Add a link at the start of any repeated content to skip it; or
*   Add links at the start of a page to each area of content.

</Title>


## Components

<Title id="4.1.2">

*   Use HTML specifications for any script you author for your website.
*   If you use a plugin or other element authored by a third party, make sure it uses valid HTML markup.

</Title>

<Title id="2.1.1">

*   Ensure users can access all elements of your website using only a keyboard
*   Ensure there are no specific timings needed for keystrokes

</Title>

<Title id="2.1.3">

*   Ensure users can access all elements of your website using only a keyboard
*   Ensure there are no specific timings needed for keystrokes

</Title>

<Title id="2.1.2">
All elements on your website can be navigated to and away from by keyboard only using the ‘tab’ or arrow keys.
</Title>

<Title id="1.4.13">

*   Dismissible by the user without moving keyboard focus or mouse hover (for example by
    pressing the ‘escape’ key or closing on click);
*   Hoverable by the mouse pointer so the pointer can be moved over the content; and
*   Persistent until the user changes keyboard focus or mouse hover, dismisses the
    content or the content is no longer valid.

</Title>

<Title id="2.2.2">

*   Ensure moving, blinking or scrolling content has a control to pause, stop or hide it.
*   Ensure auto-updating content has a control to pause, stop, hide or control the frequency of updates.

</Title>

<Title id="2.5.1" />

<Title id="2.5.2" />


## Audio & Video

<Title id="1.4.2" />

<Title id="1.1.1">
Add a short description of the media but ideally provide a transcript
</Title>

<Title id="1.2.1">
Add a short description of the media but ideally provide a transcript
</Title>

<Title id="1.2.2">

*   Add captions to all videos with sound.
*   Caption all spoken word.
*   Identify speakers.
*   Caption non-speech information (such as sound effects).

</Title>

<Title id="1.2.3">

*   Provide a full text transcript of the video; or
*   Provide a version of the video with audio description.

</Title>

<Title id="1.2.4" />

<Title id="1.2.5">

*   Provide an audio described version of a video’s soundtrack, selectable by the user; or
*   Provide an alternative version of your video with audio description.

</Title>

<Title id="1.2.6">
Make an alternative version of your video with a sign language interpreter either present in
the main video or embedded as picture-in-picture and link to it from near the original content.
</Title>

<Title id="1.2.7">

*   Provide an extended audio described version of a video’s soundtrack, selectable by the user; or
*   Provide an alternative version of your video with extended audio description.

</Title>

<Title id="1.2.8">
Provide a full text transcript for your video and link to it from near the original content
</Title>

<Title id="1.2.9">

*   Add captions to live audio; or
*   If the live broadcast is from a prepared script, make the script text available
    from near the original content.

</Title>

<Title id="1.4.7">

*   Make sure your pre-recorded audio doesn’t contain any background noise; or
*   If there has to be some background noise, it’s generally 20 decibels lower than the
    foreground noise. That’s about four times quieter.

</Title>


### Images

<Title id="1.4.5" />

<Title id="1.4.9" />

<Title id="1.1.1" />


### Forms

<Title id="1.3.5">

*   Specify the intention of each input field with “input type=”type”
*   Use specific autocomplete values to allow the user’s browser to
    prefill fields where it already has the data

</Title>

<Title id="1.1.1">
Where a control or input field is non-text, add a name
</Title>

<Title id="3.2.2">

*   Forms must not auto-submit when all fields are filled – this prevents your
    users from checking and editing what they have written.
*   Focus (the field where the user will input next) must not automatically jump
    to the next field in a form once a field is complete.
*   Using a control (like selecting yes or no) must not automatically perform the
    action (for example, selecting to subscribe to a newsletter in a check box must
    not automatically subscribe your user, they should be able to click a submit
    button to confirm their decision).

</Title>

<Title id="3.2.1">

*   Forms don’t submit without the user taking action (such as clicking the ‘Submit’ button); and
*   Focus never jumps to another element automatically; and

</Title>

<Title id="2.1.1">

*   Ensure users can access all elements of your website using only a keyboard
*   Ensure there are no specific timings needed for keystrokes, for example holding
    down ‘Enter’ for three seconds to submit a form

</Title>

<Title id="2.1.3">

*   Ensure users can access all elements of your website using only a keyboard
*   Ensure there are no specific timings needed for keystrokes

</Title>

<Title id="3.3.1">

*   Identify and explain to the user any mistakes that you can detect automatically.
*   Add error explanation close to the error, showing what is wrong and how to fix it.

</Title>

<Title id="3.3.3">

*   Your forms identify input errors.
*   When the error is missing a required field, communicate this to the
    user with a text suggestion.
*   If the error is in the format of the input, the suggestion shows the
    correct format (for example, ‘The date must be in the form DD/MM/YYYY’).
*   If the error is because the input needed to be from a limited list of values,
    provide these values and explain them.

</Title>

<Title id="3.3.4">

*   Legal commitments, financial transactions, test responses and changes
    to user controlled data are reversible; or
*   Legal commitments, financial transactions, test responses and changes
    to user controlled data are checked for input errors and the user is given
    a chance to correct any mistakes; or
*   Add a confirmation page to the data input submission process that summarises
    the input and the outcome, with an option to correct or discontinue. This page
    has an input field (for example, a confirm button or checkbox) that acts as
    confirmation of the submission.

</Title>

<Title id="3.3.6">

*   All data input submissions are reversible; or
*   All data input submissions are checked for input errors and the user
    is given a chance to correct any mistakes; or
*   Add a confirmation page to the data input submission process that summarises
    the input and the outcome, with an option to correct or discontinue. This page
    has an input field (for example, a confirm button or checkbox) that acts as
    confirmation of the submission.

</Title>

<Title id="3.3.2">

*   Label all input fields clearly and helpfully.
*   Where a field needs a specific format, give an example (For example, for a ‘date’
    field in a form you might use ‘Enter the date as dd/mm/yyyy’)
*   Mark required fields with an icon and explain what the icon means before the form.
*   Keep your labels simple – too much explanation can be counter-productive.
    Things like ‘First name’, ‘Email’ and ‘Your message’ are fine.
*   The same goes for instructions, ‘Required fields are in red and have a * symbol’
    works great. So does ‘Fill in this form and click ‘Submit’ to get in touch’.

</Title>

<Title id="3.3.5">

*   Labelling input buttons with the nature of the input (for example, ‘Subscribe’ or ‘Buy’); and
*   Where an input field needs more information than a label provides, add a link
    to that information near the field (for example ‘Help with this answer’); and
*   Where a field needs a specific format, use a label, adjacent text or placeholder
    text showing the correct format (for example, ‘Date: DD/MM/YYYY’).

</Title>

<Title id="4.1.2">
Use HTML specifications for any script you author for your website.
</Title>


## Copywriting

<Title id="3.1.5">

*   Writing so that someone with no more than nine years of school can understand you
    (that’s nine years from their first day at school, so no college or further education).
*   Adding summaries, images and diagrams to content to help explain meaning.
*   Breaking up content with well-organised sections and headings.

</Title>

<Title id="3.1.4">

*   Avoid using abbreviations, acronyms and initialisms.
*   If you need to use an abbreviation, you can explain the meaning to your users by:
    *   Showing the meaning in the text (for example, Federal Bureau of Investigation (FBI)); or
    *   Linking the abbreviation to a definition on a glossary page on your website; or
    *   Linking the abbreviation to a definition footnote on the same page; or
    *   Using the abbreviation HTML tag to expand the abbreviation.

</Title>

<Title id="3.1.3">

*   Avoid using unusual words and phrases.
*   If you need to use an unusual word or phrase, you can explain the meaning to your users by:
    *   Showing the meaning in the text (for example, ‘I like bass. A bass is a fish.’); or
    *   Showing the meaning in brackets (for example, ‘I like bass (a type of fish)’; or
    *   Linking the word to a definition on a glossary page on your website; or
    *   Linking the word to a definition footnote on the same page.

</Title>

<Title id="3.1.6">

*   Avoid using words where the meaning, in context, is ambiguous without a pronunciation guide
*   If you need to use such a word, you can explain the meaning to your users by:
    *   Providing the phonetic pronunciation of words immediately after the word; or
    *   Linking the word to a pronunciation guide on another page on your website; or
    *   Linking the word to a pronunciation guide on the same page.

</Title>
