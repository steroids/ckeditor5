/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';

// @Todo Добавить картинки, когда они будут сделаны на бэке
// import Image from '@ckeditor/ckeditor5-image/src/image.js';
// import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
// import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
// import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
// import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
// import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
// import UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';

export default class ClassicEditor extends ClassicEditorBase {
}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Autoformat,
	BlockQuote,
	Bold,
	// UploadAdapter,
	CloudServices,
	Essentials,
	FontBackgroundColor,
	FontColor,
	FontSize,
	Heading,
	Highlight,
	// @Todo Добавить картинки, когда они будут сделаны на бэке
	// Image,
	// ImageCaption,
	// ImageResize,
	// ImageStyle,
	// ImageToolbar,
	// ImageUpload,
	Indent,
	Italic,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	TodoList,
	Underline,
	TableCellProperties
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'outdent',
			'indent',
			'|',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'|',
			'undo',
			'redo',
			'|',
			'fontSize',
			'fontColor',
			'fontBackgroundColor',
			'highlight',
			'underline',
			'todoList',
			'-',
			'-'
		],
		shouldNotGroupWhenFull: true
	},
	language: 'ru',
	// @Todo Добавить картинки, когда они будут сделаны на бэке
	// image: {
	// 	toolbar: [
	// 		'imageTextAlternative',
	// 		'imageStyle:full',
	// 		'imageStyle:side'
	// 	]
	// },
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'TableCellProperties'
		]
	}
};
