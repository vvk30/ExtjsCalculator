Ext.define('ExtApplication2.view.main.Main', {
    extend: 'Ext.window.Window',
    requires: ['ExtApplication2.view.main.MainModel', 'ExtApplication2.view.main.MainController'],
    xtype: 'app-main',
    controller: 'main',
    viewModel: { type: 'main' },
    resizeable: false,
    layout: {
        type: 'table',
        columns: 4
    },
    defaultType: 'button',
    defaults: {
        width: 50,
        height: 50,
        cls: 'btn',
        handler: 'onClickNumber'
    },
    header: {
        items: [
            {
                xtype: 'displayfield',
                colspan: 4,
                width: 200,
                cls: 'display',
                bind: { value: '{display}' },
                height: 60,
                padding: 0
            }]
    },
    items: [{
        text: 'C',
        colspan: 2,
        width: 100,
        cls: 'btn-green',
        handler: 'onClickClear'
    }, {
        text: '+/-',
        cls: 'btn-green',
        handler: 'onClickChangeSign'
    }, {
        text: '&divide;',
        cls: 'btn-orange',
        handler: 'onClickOp'
    },
    { text: '7' },
    { text: '8' },
    { text: '9' },
    {
        text: '&times;',
        cls: 'btn-orange',
        handler: 'onClickOp'
    },
    { text: '4' },
    { text: '5' },
    { text: '6' },
    {
        text: '-',
        cls: 'btn-orange',
        handler: 'onClickOp'
    },
    { text: '1' },
    { text: '2' },
    { text: '3' },
    {
        text: '+',
        cls: 'btn-orange',
        handler: 'onClickOp'
    }, {
        text: '0',
        width: 100,
        colspan: 2
    }, {
        text: '.',
        handler: 'onClickDot'
    }, {
        text: '=',
        cls: 'btn-orange',
        handler: 'onClickOp'
    }]
});