({
    doInit : function(component,event)
    {
       var action = component.get("c.getAcc");
        action.setCallback(this,function(response)
                           {
                               var resp = response.getReturnValue();
                               component.set("v.resultData",resp);
                           });
        $A.enqueueAction(action);
    },
       redirectToSobject: function(component, event) {
        var selectedItem = event.currentTarget;
        var recordId = selectedItem.dataset.record;
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": recordId,
            "slideDevName": "related"
        });
        navEvt.fire();
        
        
    },
})
