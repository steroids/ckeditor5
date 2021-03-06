---
category: features
menu-title: Text part language
---

# Text part language

The {@link module:language/textpartlanguage~TextPartLanguage} feature provides the ability to mark the language of selected text fragments as well as automatically set the text direction based on the language choice. It makes working with multilingual content convenient and ensures that user agents can correctly present the content written in multiple languages, so graphical browsers and screen readers are able to identify how to pronounce text and display characters.

This feature is especially useful when your content includes text sections written in different text directions, e.g. when the whole content is written in English but includes some citations in Arabic.

The text part language feature implements the [WCAG 3.1.2 Language of Parts](https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-other-lang-id.html) specification.

## Demo

Use the editor below to see the text part language plugin in action. Select a text fragment and use the toolbar dropdown to choose from predefined available languages that can be applied to the content.

{@snippet features/textpartlanguage}

## Related features

There are other language-related CKEditor 5 features you may want to check:

* {@link features/ui-language UI Language}  &ndash; Set the UI language.
* {@link features/spelling-and-grammar-checking Spelling and grammar checking} &ndash; Employ multi-language spell check for flawless content.

## Installation

To add this feature to your rich-text editor, install the [`@ckeditor/ckeditor5-langauge`](https://www.npmjs.com/package/@ckeditor/ckeditor5-langauge) package:

```plaintext
npm install --save @ckeditor/ckeditor5-langauge
```

And add it to your plugin list configuration:

```js
import TextPartLanguage from '@ckeditor/ckeditor5-langauge/src/textpartlanguage';

ClassicEditor
	.create( document.querySelector( '#editor' ), {
		plugins: [ TextPartLanguage, ... ],
		toolbar: [ 'textPartLanguage', ... ]
	} )
	.then( ... )
	.catch( ... );
```

<info-box info>
	Read more about {@link builds/guides/integration/installing-plugins installing plugins}.
</info-box>

## Common API

The {@link module:language/textpartlanguage~TextPartLanguage} plugin registers:

* The `'textPartLanguage'` UI dropdown component implemented by the {@link module:language/textpartlanguageui~TextPartLanguageUI text part language UI feature}.
* The `'textPartLanguage'` command implemented by the {@link module:language/textpartlanguageediting~TextPartLanguageEditing text part language editing feature}.

The command can be executed using the {@link module:core/editor/editor~Editor#execute `editor.execute()`} method:

```js
// Applies the language to the selected text part with the given language code.
editor.execute( 'textPartLanguage', { languageCode: 'es' } );
```

<info-box>
	We recommend using the official {@link framework/guides/development-tools#ckeditor-5-inspector CKEditor 5 inspector} for development and debugging. It will give you tons of useful information about the state of the editor such as internal data structures, selection, commands, and many more.
</info-box>

## Contribute

The source code of the feature is available on GitHub in https://github.com/ckeditor/ckeditor5/tree/master/packages/ckeditor5-language.
