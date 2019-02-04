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
              <span class="d2h-tag d2h-changed d2h-changed-tag">CHANGED</span></span>
            </div>
            <div class="d2h-files-diff">
              <div class="d2h-file-side-diff--">
                <div class="d2h-code-wrapper">
                  <table class="d2h-diff-table">
                    <tbody class="d2h-diff-tbody">
                    <template v-for="(linha, index) of table.left">
                      <tr v-html="linha + table.right[index]" :key="index"></tr>
                      <tr v-if="commentsleft[index] || commentsright[index]" :key="index+1000">
                        <td class="d2h-code-side-linenumber d2h-cntx">??</td>
                        <td class="comment-line">

                          <v-card>
                            <v-list two-line>
                              <template v-for="(item, index) in items">
                                <v-divider v-if="item.divider" :inset="item.inset" :key="index"></v-divider>

                                <v-list-tile v-else :key="item.title" avatar>
                                  <v-list-tile-avatar>
                                    <img :src="item.avatar">
                                  </v-list-tile-avatar>

                                  <v-list-tile-content>
                                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                                    <v-list-tile-sub-title v-html="item.subtitle + commentsleft[index]"></v-list-tile-sub-title>
                                  </v-list-tile-content>
                                </v-list-tile>
                              </template>
                            </v-list>
                          </v-card>

                        </td>

                        <td class="d2h-code-side-linenumber d2h-cntx">??</td>
                        <td class="comment-line"> {{ commentsright[index] }}</td>
                      </tr>
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

  export default {
    props: ['diff', 'commentsleft', 'commentsright'],
    data: () => ({
      items: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: '<b>acdcjunior</b> 3 horas atrás',
          subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: '<b>Bob Nelson</b> 4 horas atrás',
          subtitle: "Wish I could come, but I'm out of town this weekend. Wish I could come, but I'm out of town this weekend. Wish I could come, but I'm out of town this weekend."
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        }
      ]
    }),
    computed : {
      table() {
        if (this.diff) {
          return generateHtmlDiff(this.diff.diff);
        } else {
          return {left: [], right: []};
        }
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
