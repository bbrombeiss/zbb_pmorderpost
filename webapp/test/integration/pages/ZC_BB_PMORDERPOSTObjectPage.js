sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'workforce',
            componentId: 'ZC_BB_PMORDERPOSTObjectPage',
            contextPath: '/ZC_BB_PMORDERPOST'
        },
        CustomPageDefinitions
    );
});