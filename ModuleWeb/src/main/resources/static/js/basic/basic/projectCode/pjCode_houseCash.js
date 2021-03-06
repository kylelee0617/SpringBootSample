mainTableColshc = [{
    checkbox: true
}, {
    field: 'chisu',
    title: '期數'
}, {
    field: 'priceKind',
    title: '款項'
}, {
    field: 'priceName',
    title: '款項名稱'
}, {
    field: 'per',
    title: '百分比'
}, {
    field: 'price',
    title: '金額'
}, ];

$(function() {
    let $tableHCash = $("#tableHCash");
    bsTableInit($tableHCash, mainTableColshc);

    let $btnAddHCash = $("#btnAddHCash");
    $btnAddHCash.click(function() {
    	$tableHCash.bootstrapTable('insertRow', {
            index: 0,
            row: {
                chisu: '',
                priceKind: '',
                priceName: '',
                per: '',
                price: '',
            }
        });
    });

    let $getTableDataHCash = $("#saveHC");
    $getTableDataHCash.click(function() {
        alert(JSON.stringify($tableHCash.bootstrapTable('getData')));
    });

});