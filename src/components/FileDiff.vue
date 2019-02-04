<template>
  <v-container grid-list-xs fluid>
    <v-layout
      row wrap
    >
      <v-flex
        xs12
      >
          <div id="d2h-758080" class="d2h-file-wrapper" data-lang="js">
            <div class="d2h-file-header">
              <span class="d2h-file-name-wrapper">
                <svg aria-hidden="true" class="d2h-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                    <path d="M6 5H2v-1h4v1zM2 8h7v-1H2v1z m0 2h7v-1H2v1z m0 2h7v-1H2v1z m10-7.5v9.5c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V2c0-0.55 0.45-1 1-1h7.5l3.5 3.5z m-1 0.5L8 2H1v12h10V5z"></path>
                </svg>
                <span class="d2h-file-name">{{ diff && diff.new_path }}</span>
                <span class="d2h-tag d2h-changed d2h-changed-tag">CHANGED</span>

                &emsp;
                <v-switch label="Ocultar comentários" v-model="hidecomments" style="margin: 0; padding: 0; height: 1.3em;"></v-switch>
              </span>
            </div>
            <div class="d2h-files-diff">
              <div class="d2h-file-side-diff--">
                <div class="d2h-code-wrapper">
                  <table class="d2h-diff-table">
                    <tbody class="d2h-diff-tbody">
                    <template v-for="(linha, lineNumber) of table.left">

                      <tr v-html="linha + table.right[lineNumber]" :key="lineNumber"></tr>

                      <template v-if="!hidecomments && (diffComments.left[lineNumber] || diffComments.right[lineNumber])">
                        <tr :key="lineNumber+10000">
                          <td class="d2h-code-side-linenumber d2h-cntx">&nbsp;</td>
                          <td class="comment-line">
                            <FileDiffComments :comments="diffComments.left[lineNumber]"></FileDiffComments>
                          </td>
                          <td class="d2h-code-side-linenumber d2h-cntx">&nbsp;</td>
                          <td class="comment-line">
                            <FileDiffComments :comments="diffComments.right[lineNumber]"></FileDiffComments>
                          </td>
                        </tr>
                      </template>
                    </template>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import "diff2html/dist/diff2html.min.css";
  import {generateHtmlDiff} from "../differ";
  import FileDiffComments from "./FileDiffComments";

  export default {
    components: {FileDiffComments},
    props: ['diff', 'comments'],
    data: () => ({
      hidecomments: false
    }),
    computed : {
      table() {
        if (this.diff) {
          return generateHtmlDiff(this.diff.diff);
        } else {
          return {left: [], right: []};
        }
      },
      diffComments() {
        const diffComments = {left: {}, right: {}};
        (this.comments || []).forEach(comment => {
          let side = comment.target.side;
          let line = comment.target.line;
          diffComments[side][line] = diffComments[side][line] || [];
          diffComments[side][line].push(comment);
        });
        return diffComments;
      },
    }
  }
</script>

<style>
  .comment-line {
    background-color: white;
    border: 1px solid #eee;
    padding: 1%;
  }
  .d2h-diff-tbody span {
    line-height: 1.2em;
    display: inline-block;
    white-space: pre-wrap !important;
    word-wrap: break-word !important;
  }
  .d2h-diff-tbody td:nth-child(2n) {
    width: 46%;
    min-width: 46%;
    max-width: 46%;
  }
  .d2h-code-side-linenumber {
    word-break: keep-all;
    width: 10px;
    vertical-align: top;
  }
  .d2h-diff-table {
    word-break: break-word;
  }
  .d2h-diff-table .v-list__tile__title, .d2h-diff-table .v-list__tile__sub-title {
    white-space: unset;
  }
</style>
