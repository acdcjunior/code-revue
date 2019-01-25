export const DIFFS = 'DIFFS';

export const GET_DIFFS = 'GET_DIFFS';


const state = {
//    diffs: "--- Commit.js\n+++ Commit.js\n@@ -38,15 +38,15 @@\n class Commit extends Sesol2_1.Sesol2 {\n         this.revisoes = [];\n         this.historico = [];\n     }\n-    indicarRevisoresViaMencao(revisores) {\n-        if (revisores.length === 0) {\n-            return Promise.resolve();\n+    async indicarRevisoresViaMencao(revisores) {\n+        for (let revisor of revisores) {\n+            try {\n+                await this.indicarRevisorViaMencao(revisor);\n+            }\n+            catch (e) {\n+                console.log(`Problema ao indicar revisores via mencao!`, { revisor, revisores });\n+            }\n         }\n-        const revisor = revisores[0];\n-        const revisoresRestantes = revisores.slice(1);\n-        return this.indicarRevisorViaMencao(revisor).then(() =\u003e {\n-            return this.indicarRevisoresViaMencao(revisoresRestantes);\n-        });\n     }\n     indicarRevisorViaMencao(revisor) {\n         if (revisor.isInvalido()) {\n",
    diffs: [
        {
            "old_path": "src/app/category/category.component.ts",
            "new_path": "src/app/category/category.component.ts",
            "a_mode": "100644",
            "b_mode": "100644",
            "new_file": false,
            "renamed_file": false,
            "deleted_file": false,
            "diff": "--- src/app/category/category.component.ts\n+++ src/app/category/category.component.ts\n@@ -39,6 +39,8 @@ export class CategoryComponent implements OnDestroy {\n       this.profile = profile;\n     });\n     this.route.params.subscribe(params =\u003e {\n+      this.sendTagToOneSignal(params.slug);\n+\n       categoryService.get(params.slug).subscribe(categorySerialized =\u003e {\n         this.category =  Object.assign(new Category(), categorySerialized);\n         this.styles = this.category ? this.category.getStyle() : null;\n@@ -81,6 +83,20 @@ export class CategoryComponent implements OnDestroy {\n \n   }\n \n+  sendTagToOneSignal(slug): void {\n+    const OneSignal = window['OneSignal'] || [];\n+    \n+    if (OneSignal) {\n+      OneSignal.push(() =\u003e {\n+        const key = 'category';\n+        const value = slug;\n+        OneSignal.sendTag(key, value, (tagsSent) =\u003e {\n+          console.log('OneSignal: Sent tag with key ' + key + ' and value ' + value);\n+        });\n+      });\n+    }\n+  }\n+\n   ngOnDestroy() {\n     this.categoryService.setCurrent(null);\n   }\n"
        },
        {
            "old_path": "src/app/gamification/shared/tour.interceptor.ts",
            "new_path": "src/app/gamification/shared/tour.interceptor.ts",
            "a_mode": "100644",
            "b_mode": "100644",
            "new_file": false,
            "renamed_file": false,
            "deleted_file": false,
            "diff": "--- src/app/gamification/shared/tour.interceptor.ts\n+++ src/app/gamification/shared/tour.interceptor.ts\n@@ -75,6 +75,9 @@ export class TourInterceptor implements HttpInterceptor, OnInit {\n     if (_.isNil(this.profile)) {\n       activateTour = true;\n     } else {\n+      if(_.isNil(this.profile.tour_step)) {\n+        this.profile.tour_step = Tour.STEP_TWO\n+      }\n       activateTour = this.tourService.existStep(this.profile.tour_step);\n       activateTour = activateTour \u0026\u0026 (this.profile.tour_step !== Tour.STEP_FINISH);\n     }\n"
        }
    ]
};

const getters = {
    [GET_DIFFS]: state => {
        return state.diffs;
    }
};


const actions = {};


const mutations = {};


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
