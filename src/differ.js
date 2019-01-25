import {Diff2Html} from "diff2html";
import {Diff2HtmlUI} from 'diff2html/src/ui/js/diff2html-ui';
import jQuery from 'jQuery';

export function generateHtmlDiff(diffInput) {
    let targetId = jQuery(Diff2Html.getPrettyHtml(diffInput, {
        inputFormat: "diff",
        showFiles: false,
        matching: "lines",
        outputFormat: "side-by-side"
    }));
    new Diff2HtmlUI().highlightCode(targetId);
    return {
        left: targetId.find(".d2h-diff-tbody:eq(0)").find("tr").toArray().map(tr => tr.outerHTML),
        right: targetId.find(".d2h-diff-tbody:eq(1)").find("tr").toArray().map(tr => tr.outerHTML)
    };
}

