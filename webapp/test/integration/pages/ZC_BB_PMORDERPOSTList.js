sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'workforce',
            componentId: 'ZC_BB_PMORDERPOSTList',
            contextPath: '/ZC_BB_PMORDERPOST'
        },
        CustomPageDefinitions
    );
});