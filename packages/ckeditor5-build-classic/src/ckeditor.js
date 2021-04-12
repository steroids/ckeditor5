/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import Autolink from '@ckeditor/ckeditor5-link/src/autolink.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import ListStyle from '@ckeditor/ckeditor5-list/src/liststyle.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar.js';
import { Paragraph } from 'ckeditor5/src/paragraph';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript.js';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';

export default class ClassicEditor extends ClassicEditorBase {
}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Alignment,
	Autolink,
	Bold,
	Code,
	Essentials,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	Heading,
	Indent,
	Italic,
	Link,
	List,
	ListStyle,
	MediaEmbed,
	MediaEmbedToolbar,
	Paragraph,
	RemoveFormat,
	Table,
	TableCellProperties,
	TableProperties,
	TableToolbar,
	Underline,
	Strikethrough,
	Subscript,
	Superscript,
	BlockQuote,
	Image,
	ImageCaption,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	SimpleUploadAdapter
];

// Editor configuration.
const colors = [
	'rgb(97,189,109)', 'rgb(26,188,156)', 'rgb(84,172,210)', 'rgb(44,130,201)',
	'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(204,204,204)', 'rgb(65,168,95)', 'rgb(0,168,133)',
	'rgb(61,142,185)', 'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 'rgb(0,0,0)',
	'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)', 'rgb(163,143,132)',
	'rgb(239,239,239)', 'rgb(255,255,255)', 'rgb(250,197,28)', 'rgb(243,121,52)', 'rgb(209,72,65)',
	'rgb(184,49,47)', 'rgb(124,112,107)', 'rgb(209,213,216)',
];

ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'subscript',
			'superscript',
			'fontSize',
			'fontFamily',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'bulletedList',
			'numberedList',
			'indent',
			'outdent',
			'alignment',
			'|',
			'link',
			'imageUpload',
			'blockQuote',
			'insertTable',
			'|',
			'undo',
			'redo'
		]
	},
	language: 'ru',
	fontFamily: {
		options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
	},
	fontSize: {
		options: [8, 9, 10, 11, 12, 13, 14, 15, 16],
	},
	fontColor: {colors},
	fontBackgroundColor: {colors},
	alignment: {
		options: ['left', 'right', 'center', 'justify'],
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableCellProperties',
			'tableProperties'
		]
	}
};
