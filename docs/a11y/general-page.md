---
sidebar_label: 'General'
sidebar_position: 1
---

import { Fragment } from "react";
import { renderTitle } from "./items";

export const Title = ({ id, note }) => <Fragment>{renderTitle(id, note)}</Fragment>;


# a11y checklist


## God hates this

> <Title id="1.4.2" />


## Just don't

> <Title id="1.4.5" />

> <Title id="1.4.9" />

> <Title id="3.2.1" note=" - andu - partial" />
>
> ---
>
> *   There are no automatic pop-ups;


## Uncategorized

> <Title id="2.1.4" />
>
> ---
>
> *   Don’t use single-key character shortcuts
> *   If you really want/need to:
>     *    give users a way to turn off the shortcut;
>     *    allow users to remap the shortcut to use non-character keys; or
>     *    ensure the shortcut only works when an element has focus.

> <Title id="2.2.1" />
>
> ---
>
> *   If content on your website uses a time limit, give users the option to:
>     *    turn off the time limit before it begins (for example, a landing page before the time-limited page
           can display a message that shows users what to do); or
>     *    adjust the time limit before it begins, over a range of at least ten times the default setting
           (you can do this with a landing page too); or
>     *    extend the period at least twenty seconds before it expires. This must be a simple action
           like clicking a button and must be available to use at least ten times.
> *   If your website has moving or animated text, users must be able to pause the movement.
> *   If your website has a feature that is automatically updated (for example, with the latest football scores),
      you must allow users to delay the frequency of the updates by at least ten times the default setting.

> <Title id="2.2.3" />
>
> ---
>
> *   Ensure there’s no time-limited content on your website.

> <Title id="2.2.4" />
>
> ---
>
> *   Don’t interrupt users, other than for emergencies.
> *   If you really want to interrupt users:
>     *    provide an option for turning off all but emergency interruptions (for example, by a
           ‘preferences’ or ‘accessibility’ page where choices persist for the user’s session);
>     *    allow users to postpone all updates and interruptions; or
>     *    allow users to request updates rather than receive them automatically.
> *   Don’t use an automatic redirect or refresh function based on a time delay (for example, if a
      webpage has moved, do not redirect users to the new page after a certain amount of time).

> <Title id="2.2.6" />
>
> ---
>
> *   Where possible, allow users 20 hours before a timeout removes their data
> *   Warn users of the duration of any timeout period at the beginning of the task

> <Title id="2.2.5" />
>
> ---
>
> *   When you ask a user to re-authenticate their identity, ensure the user can continue exactly
      as before with saved data (for example, their shopping basket contents, input into forms
      or accessibility options).



          <h2>Basics</h2>
          <ul>
            <li>
              {renderTitle("4.1.1")}
              <ul>
                <li>Ensure HTML elements have complete start ( &lt; > ) and end ( &lt;/ > ) tags where needed.</li>
                <li>Nest all HTML elements correctly (for example, list objects within an ordered or unordered list).</li>
                <li>Use unique Ids.</li>
                <li>Check that HTML elements don’t contain duplicate attributes.</li>
              </ul>
            </li>
          </ul>

          <h2>Design</h2>
          <h3>Consistency</h3>
          <ul>
            <li>
              {renderTitle("3.2.4")}
              <ul>
                <li>Any icons used are consistent (for example, ‘Print page’ or Twitter link); and</li>
                <li>Elements with the same function are labelled and named consistently; or</li>
                <li>Elements with the same function have a consistent text alternative.</li>
              </ul>
            </li>
          </ul>

          <h3>Color & Contrast</h3>
          <ul>
            <li>
              {renderTitle("1.3.3")}
              <ul>
                <li>Use text labels to elements in addition to sensory characteristics</li>
                <li>Don’t user instructions that only use sensory characteristics</li>
                <li>Avoid instructions that rely on sound</li>
              </ul>
            </li>
            <li>
              {renderTitle("1.4.1")}
              <ul>
                <li>Ensure no instructions rely on colour alone</li>
                <li>Ensure that no information (like charts and graphs) relies on colour alone</li>
              </ul>
            </li>
            <li>
              {renderTitle("1.4.3")}
              <ul>
                <li>Using a light background and dark text; or</li>
                <li>Using a dark background and light text; and</li>
                <li>Using a colour contrast checker to verify your choice.</li>
                <li><i>Add exceptions</i></li>
              </ul>
            </li>
            <li>
              {renderTitle("1.4.6")}
              <ul>
                <li>Using a light background and dark text; or</li>
                <li>Using a dark background and light text; and</li>
                <li>Using a colour contrast checker to verify your choice.</li>
                <li><i>Add exceptions</i></li>
              </ul>
            </li>
            <li>
              {renderTitle("1.4.11")} <br />
              When a component receives keyboard focus:
              <ul>
                <li>Ensure user controls have a contrast of at least 3:1 to the colour around them;</li>
                <li>Where controls change colour on focus or use, ensure the colours used have a contrast of at least 3:1; and</li>
                <li>Ensure all graphics (for example icons, graphs and charts) have a contrast of at least 3:1 to the colour around them.</li>
              </ul>
            </li>
          </ul>

          <h3>Focus States</h3>
          <ul>
            <li>
              {renderTitle("2.4.7")}
              <ul>
                <li>When an element has keyboard focus, show a visual indication.</li>
              </ul>
            </li>
            <li>
              {renderTitle("2.4.11")} <br />
              When a component receives keyboard focus:
              <ul>
                <li>The focus indicator has a contrast ratio of at least 3:1 between focused and unfocused states;</li>
                <li>The focus indicator has a contrast ratio of at least 3:1 against adjacent colours;</li>
                <li>The element within focus isn’t hidden; and</li>
                <li>The focus indicator area: Has an outline that’s at least 1 CSS pixel thick; or Has a shape that’s at least the area of a 4 CSS pixel-thick line;</li>
              </ul>
            </li>
            <li>
              {renderTitle("2.4.12")} <br />
              When a component receives keyboard focus:
              <ul>
                <li>The focus indicator has a contrast ratio of at least 4.5:1 between focused and unfocused states;</li>
                <li>The element within focus isn’t hidden; and</li>
                <li>The focus indicator area is at least 2 CSS pixels around the perimeter.</li>
              </ul>
            </li>
            <li>
              {renderTitle("3.2.1")}
              <ul>
                <li>Ensure no element changes purely by receiving focus.</li>
                <li>Avoid both behavioural and visual modifications.</li>
                <li>
                  Ensure that:
                  <ul>
                    <li>Links don’t open automatically on focus; and</li>
                    <li>Forms don’t submit without the user taking action (such as clicking the ‘Submit’ button); and</li>
                    <li>There are no automatic pop-ups; and</li>
                    <li>Focus never jumps to another element automatically; and</li>
                    <li>No other action that occurs on focus alone causes the page to change.</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>

          <h3>Typography</h3>
          <ul>
            <li>
              {renderTitle("1.4.12")}
              <ul>
                <li>Line height to at least 1.5 times the font size;</li>
                <li>Paragraph spacing to at least 2 times the font size;</li>
                <li>Letter spacing to at least 0.12 times the font size; and</li>
                <li>Word spacing to at least 0.16 times the font size.</li>
              </ul>
            </li>
            <li>
              {renderTitle("1.4.4")}
              <ul>
                <li>Users can resize text content in their web browser up to 200% without loss of meaning or function.</li>
                <li><i>Make sure your resized text doesn’t require the user to scroll horizontally and you fulfil part of 1.4.8 – Visual Presentation for Level AAA.</i></li>
              </ul>
            </li>
            <li>
              {renderTitle("1.4.8")} <br />
              The following five features are cumulative, as all must be in place to pass:
              <ul>
                <li>Users can select background and foreground colours; and</li>
                <li>Text blocks are no wider than 80 characters; and</li>
                <li>Text is not justified to both sides of the webpage; and</li>
                <li>Line spacing is at least space-and-a-half within paragraphs and paragraph spacing is at least 1.5 times larger than line spacing</li>
                <li>Text can be resized in a browser up to 200% without requiring the user to scroll horizontally</li>
              </ul>
            </li>
          </ul>

          <h3>Animations</h3>
          <ul>
            <li>
              {renderTitle("2.2.2")}
              <ul>
                <li>Ensure moving, blinking or scrolling content has a control to pause, stop or hide it.</li>
                <li>Ensure auto-updating content has a control to pause, stop, hide or control the frequency of updates.</li>
              </ul>
            </li>
            <li>
              {renderTitle("2.3.1")}
              <ul>
                <li>Don’t add anything to your website that flashes more than three times per second.</li>
              </ul>
            </li>
            <li>
              {renderTitle("2.3.2")}
              <ul>
                <li>Don’t add anything that flashes more than three times per second.</li>
              </ul>
            </li>
            <li>
              {renderTitle("2.3.3")}
              <ul>
                <li>Don’t use motion animation on your website; or</li>
                <li>Allow users to disable all non-essential motion animation.</li>
              </ul>
            </li>
          </ul>

          <h2>Page header meta</h2>
          <ul>
            <li>
              {renderTitle("2.4.2")}
            </li>
            <li>
              {renderTitle("3.1.1")}
            </li>
          </ul>

          <h2>General</h2>
          <ul>
            <li>
              {renderTitle("4.1.2")}
              <ul>
                <li>Use HTML specifications for any script you author for your website.</li>
                <li>If you use a plugin or other element authored by a third party, make sure it uses valid HTML markup.</li>
              </ul>
            </li>
          </ul>

          <h2>General Layout</h2>
          <ul>
            <li>
              {renderTitle("1.3.1")}
              <ul>
                <li>Break up content with subheadings for new sections</li>
                <li>Mark headings with HTML header tags</li>
                <li>Use lists, tables and other formats where needed</li>
                <li>Use the correct HTML for all structural elements</li>
                <li>Use valid HTML everywhere</li>
                <li>Use clear labels and alternative text on forms</li>
              </ul>
            </li>
            <li>
              {renderTitle("1.3.2")}
              <ul>
                <li>Present all content in a meaningful order</li>
                <li>Separate navigation menus from the content</li>
                <li>Use paragraphs in order</li>
                <li>Nest headings from H1 downwards to show their relative importance</li>
                <li>Choose whether a list needs numbering or not</li>
                <li>Use valid HTML</li>
              </ul>
            </li>
            <li>
              {renderTitle("2.4.3")}
              <ul>
                <li>Ensure the focus order of each web page follows a sequence that preserves the meaning and functionality of the page.</li>
              </ul>
            </li>
            <li>
              {renderTitle("3.2.3")}
              <ul>
                <li>Keep navigation menus in the same location on all pages; and</li>
                <li>Present the options in navigation menus in the same order on all pages; and</li>
                <li>Keep all other standard elements (for example, your search box) in the same location on all pages.</li>
              </ul>
            </li>
            <li>
              {renderTitle("2.4.5")}
              <ul>
                <li>Adding a sitemap page which links to every page on your website; and</li>
                <li>Including a search function on every page (by adding it to the header); and</li>
                <li>Providing a clear and consistent main navigation menu.</li>
              </ul>
            </li>
            <li>
              {renderTitle("2.4.8")}
              <ul>
                <li>Use breadcrumbs to help with navigation. Show the sequence a user is following and where they are in that sequence. For example, You are here: Home > Fish > Bass; and</li>
                <li>Add a sitemap page to your website (see Multiple Ways) so your users have another way of finding what they want. Add a link to the sitemap somewhere prominent like the header.</li>
              </ul>
            </li>
            <li>
              {renderTitle("2.4.4")}
              <ul>
                <li>The purpose of the link is clear from the link text (for example, ‘My blog’); or</li>
                <li>The purpose of the link is clear from the surrounding content, meaning the same sentence, paragraph or cell in a table (for example, ‘Visit my blog’); or</li>
                <li>If the link is an image, the alt text of the image makes the link purpose clear (for example, ‘Luke McGrath – Visit my blog’); and</li>
                <li>Links with the same destination have the same description (but links don’t share a description if they point to different places).</li>
              </ul>
            </li>
            <li>
              {renderTitle("2.4.9")}
              <ul>
                <li>The destination of the link is clear from the link text (for example, ‘My blog’); or</li>
                <li>If the link is an image, the alt text of the image makes the link destination clear (for example, ‘Luke McGrath – Visit my blog’); and</li>
                <li>Links with the same destination have the same description (but links don’t share a description if they point to different places).</li>
              </ul>
            </li>
            <li>
              {renderTitle("3.1.2")}
              <ul>
                <li>Set your website’s main language by meta tag (see Guideline 3.1.1).</li>
                <li>Add a language attribute to content that is not in the main language.</li>
                <li><i>If you have an alternative language version or translation of some content, link to it with the name of the language in that language (for example, ‘Francais’, ‘Deutsch’) and add a language tag to the link.</i></li>
              </ul>
            </li>
            <li>
              {renderTitle("1.3.6")}
              <ul>
                <li>Use ARIA landmarks to define regions of each page</li>
                <li>Use HTML markup to identify links, icons and user interface components</li>
              </ul>
            </li>
            <li>
              {renderTitle("2.4.13")} <br />
              If your content has page break locators, provide users with a way to navigate to and between them:
              <ul>
                <li>In HTML you can add page list navigation using &lt;nav role=”doc-pagelist”></li>
                <li>You could then add designations using &lt;span id=”pg1”></li>
              </ul>
            </li>
            <li>
              {renderTitle("1.3.4")}
              <ul>
                <li>All content retains meaning when switching orientation</li>
                <li>All content retains function when switching orientation</li>
              </ul>
            </li>
            <li>
              {renderTitle("1.4.10")} <br />
              When users enlarge content up to 400% of the default size, they should not have to scroll in their browser in more than one direction – horizontally and vertically.
              <ul>
                <li>Ensure vertical content doesn’t require a horizontal scroll at a width of 320 CSS pixels</li>
                <li>Ensure horizontal content doesn’t require a vertical scroll at a height of 256 CSS pixels</li>
              </ul>
            </li>
          </ul>

          <h2>Specific Layout</h2>
          <ul>
            <li>
              {renderTitle("2.4.6")}
              <ul>
                <li>Use descriptive headings and subheadings in content where appropriate (a change in topic or purpose)</li>
                <li>Use descriptive labels on controls and input fields</li>
              </ul>
            </li>
            <li>
              {renderTitle("2.4.10")}
              <ul>
                <li>Add a heading for every new thought or topic in your content (for example, a travel article may have headings to indicate the distinct sections on dining, transportation, and lodging).</li>
              </ul>
            </li>
            <li>
              {renderTitle("2.4.1")}
              <ul>
                <li>Add a visible ‘Skip to Content’ link to all pages on your website that sends users to the start of the main content on each page; or</li>
                <li>Add a link at the start of any repeated content to skip it; or</li>
                <li>Add links at the start of a page to each area of content.</li>
              </ul>
            </li>
          </ul>

          <h3>Components</h3>
          <ul>
            <li>
              {renderTitle("4.1.2")}
              <ul>
                <li>Use HTML specifications for any script you author for your website.</li>
                <li>If you use a plugin or other element authored by a third party, make sure it uses valid HTML markup.</li>
              </ul>
            </li>
            <li>
              {renderTitle("2.1.1")}
              <ul>
                <li>Ensure users can access all elements of your website using only a keyboard</li>
                <li>Ensure there are no specific timings needed for keystrokes</li>
              </ul>
            </li>
            <li>
              {renderTitle("2.1.3")}
              <ul>
                <li>Ensure users can access all elements of your website using only a keyboard</li>
                <li>Ensure there are no specific timings needed for keystrokes</li>
              </ul>
            </li>
            <li>
              {renderTitle("2.1.2")}
              <ul>
                <li>All elements on your website can be navigated to and away from by keyboard only using the ‘tab’ or arrow keys.</li>
              </ul>
            </li>
            <li>
              {renderTitle("1.4.13")}
              <ul>
                <li>Dismissible by the user without moving keyboard focus or mouse hover (for example by pressing the ‘escape’ key or closing on click);</li>
                <li>Hoverable by the mouse pointer so the pointer can be moved over the content; and</li>
                <li>Persistent until the user changes keyboard focus or mouse hover, dismisses the content or the content is no longer valid.</li>
              </ul>
            </li>
            <li>
              {renderTitle("2.2.2")}
              <ul>
                <li>Ensure moving, blinking or scrolling content has a control to pause, stop or hide it.</li>
                <li>Ensure auto-updating content has a control to pause, stop, hide or control the frequency of updates.</li>
              </ul>
            </li>
            <li>
              {renderTitle("2.5.1")}
            </li>
            <li>
              {renderTitle("2.5.2")}
            </li>
          </ul>

          <h3>Links -- need to rewind and add all</h3>
          <ul>
            <li>
              {renderTitle("3.2.1")}
              <ul>
                <li>Links don’t open automatically on focus.</li>
              </ul>
            </li>
          </ul>

          <h2>Audio & Video</h2>
          <ul>
            <li>
              {renderTitle("1.4.2")}
            </li>
            <li>
              {renderTitle("1.1.1")}
              <ul>
                <li>Add a short description of the media but ideally provide a transcript</li>
              </ul>
            </li>
            <li>
              {renderTitle("1.2.1")}
              <ul>
                <li>Add a short description of the media but ideally provide a transcript</li>
              </ul>
            </li>
            <li>
              {renderTitle("1.2.2")}
              <ul>
                <li>Add captions to all videos with sound.</li>
                <li>Caption all spoken word.</li>
                <li>Identify speakers.</li>
                <li>Caption non-speech information (such as sound effects).</li>
              </ul>
            </li>
            <li>
              {renderTitle("1.2.3")}
              <ul>
                <li>Provide a full text transcript of the video; or</li>
                <li>Provide a version of the video with audio description.</li>
              </ul>
            </li>
            <li>
              {renderTitle("1.2.4")}
            </li>
            <li>
              {renderTitle("1.2.5")}
              <ul>
                <li>Provide an audio described version of a video’s soundtrack, selectable by the user; or</li>
                <li>Provide an alternative version of your video with audio description.</li>
              </ul>
            </li>
            <li>
              {renderTitle("1.2.6")}
              <ul>
                <li>Make an alternative version of your video with a sign language interpreter either present in the main video or embedded as picture-in-picture and link to it from near the original content.</li>
              </ul>
            </li>
            <li>
              {renderTitle("1.2.7")}
              <ul>
                <li>Provide an extended audio described version of a video’s soundtrack, selectable by the user; or</li>
                <li>Provide an alternative version of your video with extended audio description.</li>
              </ul>
            </li>
            <li>
              {renderTitle("1.2.8")}
              <ul>
                <li>Provide a full text transcript for your video and link to it from near the original content</li>
              </ul>
            </li>
            <li>
              {renderTitle("1.2.9")}
              <ul>
                <li>Add captions to live audio; or</li>
                <li>If the live broadcast is from a prepared script, make the script text available from near the original content.</li>
              </ul>
            </li>
            <li>
              {renderTitle("1.4.7")}
              <ul>
                <li>Make sure your pre-recorded audio doesn’t contain any background noise; or</li>
                <li>If there has to be some background noise, it’s generally 20 decibels lower than the foreground noise. That’s about four times quieter.</li>
              </ul>
            </li>
          </ul>

          <h2>Images</h2>
          <ul>
            <li>
              {renderTitle("1.4.5")}
            </li>
            <li>
              {renderTitle("1.4.9")}
            </li>
            <li>
              {renderTitle("1.1.1")}
            </li>
          </ul>

          <h2>Forms</h2>
          <ul>
            <li>
              {renderTitle("1.3.5")}
              <ul>
                <li>Specify the intention of each input field with “input type=”type”</li>
                <li>Use specific autocomplete values to allow the user’s browser to prefill fields where it already has the data</li>
              </ul>
            </li>
            <li>
              {renderTitle("1.1.1")}
              <ul>
                <li>Where a control or input field is non-text, add a name</li>
              </ul>
            </li>
            <li>
              {renderTitle("3.2.2")}
              <ul>
                <li>Forms must not auto-submit when all fields are filled – this prevents your users from checking and editing what they have written.</li>
                <li>Focus (the field where the user will input next) must not automatically jump to the next field in a form once a field is complete.</li>
                <li>Using a control (like selecting yes or no) must not automatically perform the action (for example, selecting to subscribe to a newsletter in a check box must not automatically subscribe your user, they should be able to click a submit button to confirm their decision).</li>
              </ul>
            </li>
            <li>
              {renderTitle("3.2.1")}
              <ul>
                <li>Forms don’t submit without the user taking action (such as clicking the ‘Submit’ button); and</li>
                <li>Focus never jumps to another element automatically; and</li>
              </ul>
            </li>
            <li>
              {renderTitle("2.1.1")}
              <ul>
                <li>Ensure users can access all elements of your website using only a keyboard</li>
                <li>Ensure there are no specific timings needed for keystrokes, for example holding down ‘Enter’ for three seconds to submit a form</li>
              </ul>
            </li>
            <li>
              {renderTitle("2.1.3")}
              <ul>
                <li>Ensure users can access all elements of your website using only a keyboard</li>
                <li>Ensure there are no specific timings needed for keystrokes</li>
              </ul>
            </li>
            <li>
              {renderTitle("3.3.1")}
              <ul>
                <li>Identify and explain to the user any mistakes that you can detect automatically.</li>
                <li>Add error explanation close to the error, showing what is wrong and how to fix it.</li>
              </ul>
            </li>
            <li>
              {renderTitle("3.3.3")}
              <ul>
                <li>Your forms identify input errors.</li>
                <li>When the error is missing a required field, communicate this to the user with a text suggestion.</li>
                <li>If the error is in the format of the input, the suggestion shows the correct format (for example, ‘The date must be in the form DD/MM/YYYY’).</li>
                <li>If the error is because the input needed to be from a limited list of values, provide these values and explain them.</li>
              </ul>
            </li>
            <li>
              {renderTitle("3.3.4")}
              <ul>
                <li>Legal commitments, financial transactions, test responses and changes to user controlled data are reversible; or</li>
                <li>Legal commitments, financial transactions, test responses and changes to user controlled data are checked for input errors and the user is given a chance to correct any mistakes; or</li>
                <li>Add a confirmation page to the data input submission process that summarises the input and the outcome, with an option to correct or discontinue. This page has an input field (for example, a confirm button or checkbox) that acts as confirmation of the submission.</li>
              </ul>
            </li>
            <li>
              {renderTitle("3.3.6")}
              <ul>
                <li>All data input submissions are reversible; or</li>
                <li>All data input submissions are checked for input errors and the user is given a chance to correct any mistakes; or</li>
                <li>Add a confirmation page to the data input submission process that summarises the input and the outcome, with an option to correct or discontinue. This page has an input field (for example, a confirm button or checkbox) that acts as confirmation of the submission.</li>
              </ul>
            </li>
            <li>
              {renderTitle("3.3.2")}
              <ul>
                <li>Label all input fields clearly and helpfully.</li>
                <li>Where a field needs a specific format, give an example (For example, for a ‘date’ field in a form you might use ‘Enter the date as dd/mm/yyyy’)</li>
                <li>Mark required fields with an icon and explain what the icon means before the form.</li>
                <li>Keep your labels simple – too much explanation can be counter-productive. Things like ‘First name’, ‘Email’ and ‘Your message’ are fine.</li>
                <li>The same goes for instructions, ‘Required fields are in red and have a * symbol’ works great. So does ‘Fill in this form and click ‘Submit’ to get in touch’.</li>
              </ul>
            </li>
            <li>
              {renderTitle("3.3.5")}
              <ul>
                <li>Labelling input buttons with the nature of the input (for example, ‘Subscribe’ or ‘Buy’); and</li>
                <li>Where an input field needs more information than a label provides, add a link to that information near the field (for example ‘Help with this answer’); and</li>
                <li>Where a field needs a specific format, use a label, adjacent text or placeholder text showing the correct format (for example, ‘Date: DD/MM/YYYY’).</li>
              </ul>
            </li>
            <li>
              {renderTitle("4.1.2")}
              <ul>
                <li>Use HTML specifications for any script you author for your website.</li>
              </ul>
            </li>
          </ul>

          <h2>Copywriting</h2>
          <ul>
            <li>
              {renderTitle("3.1.5")}
              <ul>
                <li>Writing so that someone with no more than nine years of school can understand you (that’s nine years from their first day at school, so no college or further education).</li>
                <li>Adding summaries, images and diagrams to content to help explain meaning.</li>
                <li>Breaking up content with well-organised sections and headings.</li>
              </ul>
            </li>
            <li>
              {renderTitle("3.1.4")}
              <ul>
                <li>Avoid using abbreviations, acronyms and initialisms.</li>
                <li>
                  If you need to use an abbreviation, you can explain the meaning to your users by:
                  <ul>
                    <li>Showing the meaning in the text (for example, Federal Bureau of Investigation (FBI)); or</li>
                    <li>Linking the abbreviation to a definition on a glossary page on your website; or</li>
                    <li>Linking the abbreviation to a definition footnote on the same page; or</li>
                    <li>Using the abbreviation HTML tag to expand the abbreviation.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              {renderTitle("3.1.3")}
              <ul>
                <li>Avoid using unusual words and phrases.</li>
                <li>
                  If you need to use an unusual word or phrase, you can explain the meaning to your users by:
                  <ul>
                    <li>Showing the meaning in the text (for example, ‘I like bass. A bass is a fish.’); or</li>
                    <li>Showing the meaning in brackets (for example, ‘I like bass (a type of fish)’; or</li>
                    <li>Linking the word to a definition on a glossary page on your website; or</li>
                    <li>Linking the word to a definition footnote on the same page.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              {renderTitle("3.1.6")}
              <ul>
                <li>Avoid using words where the meaning, in context, is ambiguous without a pronunciation guide</li>
                <li>
                  If you need to use such a word, you can explain the meaning to your users by:
                  <ul>
                    <li>Providing the phonetic pronunciation of words immediately after the word; or</li>
                    <li>Linking the word to a pronunciation guide on another page on your website; or</li>
                    <li>Linking the word to a pronunciation guide on the same page.</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </section>
