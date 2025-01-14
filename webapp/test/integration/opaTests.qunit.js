sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'workforce/test/integration/FirstJourney',
		'workforce/test/integration/pages/ZC_BB_PMORDERPOSTList',
		'workforce/test/integration/pages/ZC_BB_PMORDERPOSTObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZC_BB_PMORDERPOSTList, ZC_BB_PMORDERPOSTObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('workforce') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZC_BB_PMORDERPOSTList: ZC_BB_PMORDERPOSTList,
					onTheZC_BB_PMORDERPOSTObjectPage: ZC_BB_PMORDERPOSTObjectPage
                }
            },
            opaJourney.run
        );
    }
);