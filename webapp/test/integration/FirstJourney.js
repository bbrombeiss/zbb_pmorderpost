sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("First journey");

            opaTest("Start application", function (Given, When, Then) {
                Given.iStartMyApp();

                Then.onTheZC_BB_PMORDERPOSTList.iSeeThisPage();

            });


            opaTest("Navigate to ObjectPage", function (Given, When, Then) {
                // Note: this test will fail if the ListReport page doesn't show any data
                
                When.onTheZC_BB_PMORDERPOSTList.onFilterBar().iExecuteSearch();
                
                Then.onTheZC_BB_PMORDERPOSTList.onTable().iCheckRows();

                When.onTheZC_BB_PMORDERPOSTList.onTable().iPressRow(0);
                Then.onTheZC_BB_PMORDERPOSTObjectPage.iSeeThisPage();

            });

            opaTest("Teardown", function (Given, When, Then) { 
                // Cleanup
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});