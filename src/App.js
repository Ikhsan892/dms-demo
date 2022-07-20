/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import "./App.css";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import DecoupledEditor from "@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor";
import FindAndReplace from "@ckeditor/ckeditor5-find-and-replace/src/findandreplace";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
import Pagination from "@ckeditor/ckeditor5-pagination/src/pagination";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import ExportWord from "@ckeditor/ckeditor5-export-word/src/exportword";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import PageBreak from "@ckeditor/ckeditor5-page-break/src/pagebreak";
import Comments from "@ckeditor/ckeditor5-comments/src/comments";
import TrackChanges from "@ckeditor/ckeditor5-track-changes/src/trackchanges";
import CloudServices from "@ckeditor/ckeditor5-cloud-services/src/cloudservices";

import RealTimeCollaborativeTrackChanges from "@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativetrackchanges";
import RealTimeCollaborativeComments from "@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativecomments";
import PresenceList from "@ckeditor/ckeditor5-real-time-collaboration/src/presencelist";
import ExportPdf from "@ckeditor/ckeditor5-export-pdf/src/exportpdf";

function randomString() {
  // return Math.floor(Math.random() * Math.pow(2, 52)).toString(32);
  return "2jfjoi2X";
}

function isCloudServicesTokenEndpoint(tokenUrl) {
  return /cke-cs[\w-]*\.com\/token\/dev/.test(tokenUrl);
}

function getRawTokenUrl(url) {
  if (isCloudServicesTokenEndpoint(url)) {
    return url.split("?")[0];
  }

  return url;
}

const initialData = `
	<h2>Bilingual Personality Disorder</h2>

	<figure class="image image-style-side">
		<img src="https://c.cksource.com/a/1/img/docs/sample-image-bilingual-personality-disorder.jpg" srcset="https://c.cksource.com/a/1/img/docs/sample-image-bilingual-personality-disorder.jpg, https://c.cksource.com/a/1/img/docs/sample-image-bilingual-personality-disorder_2x.jpg 2x">
		<figcaption>
			One language, one person.
		</figcaption>
	</figure>

	<p>
		This may be the first time you hear about this made-up disorder but it actually isn’t so far from the truth. Even the studies
		that were conducted almost half a century show that <strong>the language you speak has more effects on you than you realize</strong>.
	</p>
	<p>
		One of the very first experiments conducted on this topic dates back to 1964.
		<a href="https://www.researchgate.net/publication/9440038_Language_and_TAT_content_in_bilinguals">In the experiment</a>
		designed by linguist Ervin-Tripp who is an expert in psycholinguistic and sociolinguistic studies, adults who are bilingual
		in English in French were showed series of pictures and were asked to create 3-minute stories. In the end participants emphasized
		drastically different dynamics for stories in English and French.
	</p>
	<p>
		Another ground-breaking experiment which included bilingual Japanese women married to American men in San Francisco were asked
		to complete sentences. The goal of the experiment was to investigate whether or not human feelings and thoughts are expressed
		differently in <strong>different language mindsets</strong>.
	</p>
	<p>Here is a sample from the the experiment:</p>

	<table>
		<thead>
			<tr>
				<th></th>
				<th>English</th>
				<th>Japanese</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Real friends should</td>
				<td>Be very frank</td>
				<td>Help each other</td>
			</tr>
			<tr>
				<td>I will probably become</td>
				<td>A teacher</td>
				<td>A housewife</td>
			</tr>
			<tr>
				<td>When there is a conflict with family</td>
				<td>I do what I want</td>
				<td>It's a time of great unhappiness</td>
			</tr>
		</tbody>
	</table>

	<p>
		More recent <a href="https://books.google.pl/books?id=1LMhWGHGkRUC">studies</a> show, the language a person speaks affects
		their cognition, behavior, emotions and hence <strong>their personality</strong>. This shouldn’t come as a surprise
		<a href="https://en.wikipedia.org/wiki/Lateralization_of_brain_function">since wealready know</a> that different regions
		of the brain become more active depending on the person’s activity at hand. The structure, information and especially
		<strong>the culture</strong> of languages varies substantially and the language a person speaks is an essential element of daily life.
	</p>
`;

export default class App extends Component {
  state = {
    // You need this state to render the <CKEditor /> component after the layout is ready.
    // <CKEditor /> needs HTMLElements of `Sidebar` and `PresenceList` plugins provided through
    // the `config` property and you have to ensure that both are already rendered.
    isLayoutReady: false,
  };

  sidebarElementRef = React.createRef();
  presenceListElementRef = React.createRef();

  componentDidMount() {
    // When the layout is ready you can switch the state and render the `<CKEditor />` component.
    this.setState({ isLayoutReady: true });
  }

  render() {
    return (
      <div className="App">
        <main>
          {/*<div className="message">*/}
          {/*  <div className="centered">*/}
          {/*    <h2>*/}
          {/*      CKEditor 5 React integration of classic editor with real-time*/}
          {/*      collaboration*/}
          {/*    </h2>*/}
          {/*    <p>*/}
          {/*      Open this sample in another browser tab to start real-time*/}
          {/*      collaborative editing.*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*</div>*/}

          <div className="centered">
            <div className="row-presence">
              <div ref={this.presenceListElementRef} className="presence"></div>
            </div>
            {this.renderEditor()}
          </div>
        </main>

        {this.renderFooter()}
      </div>
    );
  }

  renderHeader() {
    return (
      <header>
        <div className="centered">
          <h1>
            <a
              href="https://ckeditor.com/ckeditor-5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://c.cksource.com/a/1/logos/ckeditor5.svg"
                alt="CKEditor 5 logo"
              />{" "}
              CKEditor 5
            </a>
          </h1>

          <nav>
            <ul>
              <li>
                <a
                  href="https://ckeditor.com/collaboration/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              </li>
              <li>
                <a
                  href="https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/real-time-collaboration/real-time-collaboration.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  renderEditor() {
    // You should contact CKSource to get the CloudServices configuration.
    const cloudServicesConfig = {
      tokenUrl: process.env.REACT_APP_TOKEN_URL,
      uploadUrl: process.env.REACT_APP_UPLOAD_URL,
      webSocketUrl: process.env.REACT_APP_WEBSOCKET_URL,
      channelId: randomString(),
    };

    return (
      <div className="row row-editor">
        {this.state.isLayoutReady && (
          <CKEditor
            onReady={(editor) => {
              console.log("Editor is ready to use!", editor);

              // Switch between inline and sidebar annotations according to the window size.
              this.boundRefreshDisplayMode = this.refreshDisplayMode.bind(
                this,
                editor
              );
              // Prevent closing the tab when any action is pending.
              this.boundCheckPendingActions = this.checkPendingActions.bind(
                this,
                editor
              );

              window.addEventListener("resize", this.boundRefreshDisplayMode);
              window.addEventListener(
                "beforeunload",
                this.boundCheckPendingActions
              );
              this.refreshDisplayMode(editor);
            }}
            onChange={(event, editor) => console.log({ event, editor })}
            editor={ClassicEditor}
            config={{
              plugins: [
                Alignment,
                Autoformat,
                BlockQuote,
                Bold,
                CKFinder,
                CloudServices,
                Comments,
                EasyImage,
                ExportWord,
                Essentials,
                ExportPdf,
                FontFamily,
                FontSize,
                FindAndReplace,
                Heading,
                Highlight,
                HorizontalLine,
                Image,
                ImageCaption,
                ImageResize,
                ImageStyle,
                ImageToolbar,
                ImageUpload,
                Italic,
                Link,
                List,
                MediaEmbed,
                PageBreak,
                Pagination,
                Paragraph,
                PasteFromOffice,
                PresenceList,
                RealTimeCollaborativeComments,
                RealTimeCollaborativeTrackChanges,
                RemoveFormat,
                Strikethrough,
                Table,
                TableToolbar,
                TrackChanges,
                Underline,
                UploadAdapter,
              ],
              toolbar: [
                "heading",
                "fontsize",
                "fontfamily",
                "|",
                "bold",
                "italic",
                "underline",
                "strikethrough",
                "removeFormat",
                "highlight",
                "|",
                "alignment",
                "horizontalLine",
                "|",
                "numberedList",
                "bulletedList",
                "|",
                "link",
                "blockquote",
                "imageUpload",
                "insertTable",
                "mediaEmbed",
                "|",
                "undo",
                "redo",
                "|",
                "pageBreak",
                "comment",
                "|",
                "trackChanges",
                "findAndReplace",
                "|",
                "revisionHistory",
                "|",
                "exportPdf",
                "exportWord",
              ],
              pagination: {
                // A4
                pageWidth: "21cm",
                pageHeight: "29.7cm",

                pageMargins: {
                  top: "20mm",
                  bottom: "20mm",
                  right: "12mm",
                  left: "12mm",
                },
              },
              cloudServices: {
                tokenUrl: `${process.env.REACT_APP_TOKEN_URL}`,
                uploadUrl: `${process.env.REACT_APP_UPLOAD_URL}`,
                webSocketUrl: `${process.env.REACT_APP_WEBSOCKET_URL}`,
              },
              collaboration: {
                channelId: randomString(),
              },
              exportPdf: {
                tokenUrl: `${process.env.REACT_APP_TOKEN_URL}`,
                stylesheets: ["EDITOR_STYLES"],
                fileName: "DownloadedPDF.pdf",
                converterOptions: {
                  format: "A4",
                  margin_top: "20mm",
                  margin_bottom: "20mm",
                  margin_right: "12mm",
                  margin_left: "12mm",
                  page_orientation: "portrait",
                },
              },
              exportWord: {
                tokenUrl: `${process.env.REACT_APP_TOKEN_URL}`,
                fileName: "my-file.docx",
                converterOptions: {
                  format: "A4", // Default value, you don't need to specify it explicitly for A4.
                  margin_top: "20mm",
                  margin_bottom: "20mm",
                  margin_right: "12mm",
                  margin_left: "12mm",
                },
              },
              image: {
                toolbar: [
                  "imageStyle:inline",
                  "imageStyle:block",
                  "imageStyle:side",
                  "|",
                  "toggleImageCaption",
                  "imageTextAlternative",
                  "|",
                  "comment",
                ],
              },
              table: {
                contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
                tableToolbar: ["comment"],
              },
              mediaEmbed: {
                toolbar: ["comment"],
              },
              licenseKey:
                "as9gotlIkAJ7D75Qo9OPil56zW0qfYF0Y/zSt2IfkIBfyy1juTlI89iVbw==",
              sidebar: {
                container: this.sidebarElementRef.current,
              },
              presenceList: {
                container: this.presenceListElementRef.current,
              },
              comments: {
                editorConfig: {
                  extraPlugins: [Bold, Italic, Underline, List, Autoformat],
                },
              },
              revisionHistory: {
                editorContainer: document.querySelector("#editor-container"),
                viewerContainer: document.querySelector(
                  "#revision-viewer-container"
                ),
                viewerEditorElement: document.querySelector(
                  "#revision-viewer-editor"
                ),
                viewerSidebarContainer: document.querySelector(
                  "#revision-viewer-sidebar"
                ),
              },
            }}
            data={initialData}
          />
        )}
        <div ref={this.sidebarElementRef} className="sidebar"></div>
      </div>
    );
  }

  renderFooter() {
    return (
      <footer>
        {/*<div className="centered">*/}
        {/*  <p>*/}
        {/*    <a*/}
        {/*      href="https://ckeditor.com/ckeditor-5/"*/}
        {/*      target="_blank"*/}
        {/*      rel="noopener noreferrer"*/}
        {/*    >*/}
        {/*      CKEditor 5*/}
        {/*    </a>{" "}*/}
        {/*    – Rich text editor of tomorrow, available today*/}
        {/*  </p>*/}
        {/*  <p>*/}
        {/*    Copyright © 2003-2022,{" "}*/}
        {/*    <a*/}
        {/*      href="https://cksource.com/"*/}
        {/*      target="_blank"*/}
        {/*      rel="noopener noreferrer"*/}
        {/*    >*/}
        {/*      CKSource*/}
        {/*    </a>{" "}*/}
        {/*    Holding sp. z o.o. All rights reserved.*/}
        {/*  </p>*/}
        {/*</div>*/}
      </footer>
    );
  }

  refreshDisplayMode(editor) {
    const annotationsUIs = editor.plugins.get("AnnotationsUIs");
    const sidebarElement = this.sidebarElementRef.current;

    if (window.innerWidth < 1070) {
      sidebarElement.classList.remove("narrow");
      sidebarElement.classList.add("hidden");
      annotationsUIs.switchTo("inline");
    } else if (window.innerWidth < 1300) {
      sidebarElement.classList.remove("hidden");
      sidebarElement.classList.add("narrow");
      annotationsUIs.switchTo("narrowSidebar");
    } else {
      sidebarElement.classList.remove("hidden", "narrow");
      annotationsUIs.switchTo("wideSidebar");
    }
  }

  checkPendingActions(editor, domEvt) {
    if (editor.plugins.get("PendingActions").hasAny) {
      domEvt.preventDefault();
      domEvt.returnValue = true;
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.boundRefreshDisplayMode);
    window.removeEventListener("beforeunload", this.boundCheckPendingActions);
  }
}
