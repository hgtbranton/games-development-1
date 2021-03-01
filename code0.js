gdjs.MainCode = {};
gdjs.MainCode.GDplayerObjects1= [];
gdjs.MainCode.GDplayerObjects2= [];
gdjs.MainCode.GDplayerObjects3= [];
gdjs.MainCode.GDplayerObjects4= [];
gdjs.MainCode.GDenemyBeeObjects1= [];
gdjs.MainCode.GDenemyBeeObjects2= [];
gdjs.MainCode.GDenemyBeeObjects3= [];
gdjs.MainCode.GDenemyBeeObjects4= [];
gdjs.MainCode.GDenemyCowObjects1= [];
gdjs.MainCode.GDenemyCowObjects2= [];
gdjs.MainCode.GDenemyCowObjects3= [];
gdjs.MainCode.GDenemyCowObjects4= [];
gdjs.MainCode.GDenemyRamObjects1= [];
gdjs.MainCode.GDenemyRamObjects2= [];
gdjs.MainCode.GDenemyRamObjects3= [];
gdjs.MainCode.GDenemyRamObjects4= [];
gdjs.MainCode.GDstatsObjects1= [];
gdjs.MainCode.GDstatsObjects2= [];
gdjs.MainCode.GDstatsObjects3= [];
gdjs.MainCode.GDstatsObjects4= [];
gdjs.MainCode.GDlevelObjects1= [];
gdjs.MainCode.GDlevelObjects2= [];
gdjs.MainCode.GDlevelObjects3= [];
gdjs.MainCode.GDlevelObjects4= [];
gdjs.MainCode.GDcheatMenuObjects1= [];
gdjs.MainCode.GDcheatMenuObjects2= [];
gdjs.MainCode.GDcheatMenuObjects3= [];
gdjs.MainCode.GDcheatMenuObjects4= [];
gdjs.MainCode.GDdmgUpObjects1= [];
gdjs.MainCode.GDdmgUpObjects2= [];
gdjs.MainCode.GDdmgUpObjects3= [];
gdjs.MainCode.GDdmgUpObjects4= [];
gdjs.MainCode.GDhpUpObjects1= [];
gdjs.MainCode.GDhpUpObjects2= [];
gdjs.MainCode.GDhpUpObjects3= [];
gdjs.MainCode.GDhpUpObjects4= [];
gdjs.MainCode.GDplayerProjObjects1= [];
gdjs.MainCode.GDplayerProjObjects2= [];
gdjs.MainCode.GDplayerProjObjects3= [];
gdjs.MainCode.GDplayerProjObjects4= [];
gdjs.MainCode.GDtestTextObjects1= [];
gdjs.MainCode.GDtestTextObjects2= [];
gdjs.MainCode.GDtestTextObjects3= [];
gdjs.MainCode.GDtestTextObjects4= [];
gdjs.MainCode.GDarenaWallObjects1= [];
gdjs.MainCode.GDarenaWallObjects2= [];
gdjs.MainCode.GDarenaWallObjects3= [];
gdjs.MainCode.GDarenaWallObjects4= [];
gdjs.MainCode.GDhealObjects1= [];
gdjs.MainCode.GDhealObjects2= [];
gdjs.MainCode.GDhealObjects3= [];
gdjs.MainCode.GDhealObjects4= [];
gdjs.MainCode.GDgodModeCheatObjects1= [];
gdjs.MainCode.GDgodModeCheatObjects2= [];
gdjs.MainCode.GDgodModeCheatObjects3= [];
gdjs.MainCode.GDgodModeCheatObjects4= [];
gdjs.MainCode.GDdamageCheatObjects1= [];
gdjs.MainCode.GDdamageCheatObjects2= [];
gdjs.MainCode.GDdamageCheatObjects3= [];
gdjs.MainCode.GDdamageCheatObjects4= [];
gdjs.MainCode.GDhpUpCheatObjects1= [];
gdjs.MainCode.GDhpUpCheatObjects2= [];
gdjs.MainCode.GDhpUpCheatObjects3= [];
gdjs.MainCode.GDhpUpCheatObjects4= [];
gdjs.MainCode.GDdmgUpCheatObjects1= [];
gdjs.MainCode.GDdmgUpCheatObjects2= [];
gdjs.MainCode.GDdmgUpCheatObjects3= [];
gdjs.MainCode.GDdmgUpCheatObjects4= [];
gdjs.MainCode.GDcheatBGObjects1= [];
gdjs.MainCode.GDcheatBGObjects2= [];
gdjs.MainCode.GDcheatBGObjects3= [];
gdjs.MainCode.GDcheatBGObjects4= [];
gdjs.MainCode.GDcontrolsTextObjects1= [];
gdjs.MainCode.GDcontrolsTextObjects2= [];
gdjs.MainCode.GDcontrolsTextObjects3= [];
gdjs.MainCode.GDcontrolsTextObjects4= [];
gdjs.MainCode.GDcheatTextObjects1= [];
gdjs.MainCode.GDcheatTextObjects2= [];
gdjs.MainCode.GDcheatTextObjects3= [];
gdjs.MainCode.GDcheatTextObjects4= [];

gdjs.MainCode.conditionTrue_0 = {val:false};
gdjs.MainCode.condition0IsTrue_0 = {val:false};
gdjs.MainCode.condition1IsTrue_0 = {val:false};
gdjs.MainCode.condition2IsTrue_0 = {val:false};
gdjs.MainCode.condition3IsTrue_0 = {val:false};
gdjs.MainCode.condition4IsTrue_0 = {val:false};
gdjs.MainCode.conditionTrue_1 = {val:false};
gdjs.MainCode.condition0IsTrue_1 = {val:false};
gdjs.MainCode.condition1IsTrue_1 = {val:false};
gdjs.MainCode.condition2IsTrue_1 = {val:false};
gdjs.MainCode.condition3IsTrue_1 = {val:false};
gdjs.MainCode.condition4IsTrue_1 = {val:false};


gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("enemyBee"), gdjs.MainCode.GDenemyBeeObjects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainCode.GDplayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("stats"), gdjs.MainCode.GDstatsObjects2);
{for(var i = 0, len = gdjs.MainCode.GDenemyBeeObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDenemyBeeObjects2[i].returnVariable(gdjs.MainCode.GDenemyBeeObjects2[i].getVariables().get("dir")).setNumber(gdjs.randomInRange(0, 360));
}
}{for(var i = 0, len = gdjs.MainCode.GDenemyBeeObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDenemyBeeObjects2[i].addPolarForce(gdjs.randomInRange(0, 360), 200, 1);
}
}{for(var i = 0, len = gdjs.MainCode.GDstatsObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDstatsObjects2[i].setString("Health: " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(0))) + " / " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(2))) + gdjs.evtTools.string.newLine() + "Damage: " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(1))));
}
}}

}


};gdjs.MainCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cheatMenu"), gdjs.MainCode.GDcheatMenuObjects2);
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "beeSpawn", 0, 0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(6);
}{for(var i = 0, len = gdjs.MainCode.GDcheatMenuObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDcheatMenuObjects2[i].resetTimer("bufferClosed");
}
}
{ //Subevents
gdjs.MainCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 0;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("level"), gdjs.MainCode.GDlevelObjects1);
{for(var i = 0, len = gdjs.MainCode.GDlevelObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDlevelObjects1[i].setString("level: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.MainCode.GDplayerObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDdmgUpObjects2Objects = Hashtable.newFrom({"dmgUp": gdjs.MainCode.GDdmgUpObjects2});gdjs.MainCode.eventsList2 = function(runtimeScene) {

{


{
/* Reuse gdjs.MainCode.GDdmgUpObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDdmgUpObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDdmgUpObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.MainCode.GDplayerObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDhpUpObjects2Objects = Hashtable.newFrom({"hpUp": gdjs.MainCode.GDhpUpObjects2});gdjs.MainCode.eventsList3 = function(runtimeScene) {

{


{
/* Reuse gdjs.MainCode.GDhpUpObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDhpUpObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDhpUpObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.MainCode.GDplayerObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDhealObjects1Objects = Hashtable.newFrom({"heal": gdjs.MainCode.GDhealObjects1});gdjs.MainCode.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("dmgUp"), gdjs.MainCode.GDdmgUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainCode.GDplayerObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDplayerObjects2Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDdmgUpObjects2Objects, false, runtimeScene, false);
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8380660);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDplayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("stats"), gdjs.MainCode.GDstatsObjects2);
{for(var i = 0, len = gdjs.MainCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDplayerObjects2[i].returnVariable(gdjs.MainCode.GDplayerObjects2[i].getVariables().getFromIndex(1)).add(1);
}
}{for(var i = 0, len = gdjs.MainCode.GDstatsObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDstatsObjects2[i].setString("Health: " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(0))) + " / " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(2))) + gdjs.evtTools.string.newLine() + "Damage: " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(1))));
}
}
{ //Subevents
gdjs.MainCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("hpUp"), gdjs.MainCode.GDhpUpObjects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainCode.GDplayerObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDplayerObjects2Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDhpUpObjects2Objects, false, runtimeScene, false);
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8382324);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDplayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("stats"), gdjs.MainCode.GDstatsObjects2);
{for(var i = 0, len = gdjs.MainCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDplayerObjects2[i].returnVariable(gdjs.MainCode.GDplayerObjects2[i].getVariables().getFromIndex(2)).add(2);
}
}{for(var i = 0, len = gdjs.MainCode.GDstatsObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDstatsObjects2[i].setString("Health: " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(0))) + " / " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(2))) + gdjs.evtTools.string.newLine() + "Damage: " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(1))));
}
}
{ //Subevents
gdjs.MainCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("heal"), gdjs.MainCode.GDhealObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainCode.GDplayerObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
gdjs.MainCode.condition2IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDplayerObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDhealObjects1Objects, false, runtimeScene, false);
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDplayerObjects1[i].getVariableNumber(gdjs.MainCode.GDplayerObjects1[i].getVariables().getFromIndex(0)) < (gdjs.RuntimeObject.getVariableNumber(gdjs.MainCode.GDplayerObjects1[i].getVariables().getFromIndex(2))) ) {
        gdjs.MainCode.condition1IsTrue_0.val = true;
        gdjs.MainCode.GDplayerObjects1[k] = gdjs.MainCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDplayerObjects1.length = k;}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8384780);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDhealObjects1 */
/* Reuse gdjs.MainCode.GDplayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("stats"), gdjs.MainCode.GDstatsObjects1);
{for(var i = 0, len = gdjs.MainCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDplayerObjects1[i].returnVariable(gdjs.MainCode.GDplayerObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}{for(var i = 0, len = gdjs.MainCode.GDstatsObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDstatsObjects1[i].setString("Health: " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects1[0].getVariables()).getFromIndex(0))) + " / " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects1[0].getVariables()).getFromIndex(2))) + gdjs.evtTools.string.newLine() + "Damage: " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects1[0].getVariables()).getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.MainCode.GDhealObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDhealObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.MainCode.GDplayerObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDarenaWallObjects2Objects = Hashtable.newFrom({"arenaWall": gdjs.MainCode.GDarenaWallObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDarenaWallObjects2Objects = Hashtable.newFrom({"arenaWall": gdjs.MainCode.GDarenaWallObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.MainCode.GDplayerObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDenemyBeeObjects2Objects = Hashtable.newFrom({"enemyBee": gdjs.MainCode.GDenemyBeeObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.MainCode.GDplayerObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDenemyCowObjects2Objects = Hashtable.newFrom({"enemyCow": gdjs.MainCode.GDenemyCowObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDplayerProjObjects3Objects = Hashtable.newFrom({"playerProj": gdjs.MainCode.GDplayerProjObjects3});gdjs.MainCode.eventsList5 = function(runtimeScene) {

{


{
/* Reuse gdjs.MainCode.GDplayerProjObjects3 */
{for(var i = 0, len = gdjs.MainCode.GDplayerProjObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDplayerProjObjects3[i].addPolarForce(270, 300, 1);
}
}}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDplayerProjObjects3Objects = Hashtable.newFrom({"playerProj": gdjs.MainCode.GDplayerProjObjects3});gdjs.MainCode.eventsList6 = function(runtimeScene) {

{


{
/* Reuse gdjs.MainCode.GDplayerProjObjects3 */
{for(var i = 0, len = gdjs.MainCode.GDplayerProjObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDplayerProjObjects3[i].addPolarForce(180, 300, 1);
}
}}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDplayerProjObjects3Objects = Hashtable.newFrom({"playerProj": gdjs.MainCode.GDplayerProjObjects3});gdjs.MainCode.eventsList7 = function(runtimeScene) {

{


{
/* Reuse gdjs.MainCode.GDplayerProjObjects3 */
{for(var i = 0, len = gdjs.MainCode.GDplayerProjObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDplayerProjObjects3[i].addPolarForce(90, 300, 1);
}
}}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDplayerProjObjects2Objects = Hashtable.newFrom({"playerProj": gdjs.MainCode.GDplayerProjObjects2});gdjs.MainCode.eventsList8 = function(runtimeScene) {

{


{
/* Reuse gdjs.MainCode.GDplayerProjObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDplayerProjObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDplayerProjObjects2[i].addPolarForce(0, 300, 1);
}
}}

}


};gdjs.MainCode.eventsList9 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8392404);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.MainCode.GDplayerObjects2, gdjs.MainCode.GDplayerObjects3);

gdjs.MainCode.GDplayerProjObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDplayerProjObjects3Objects, (( gdjs.MainCode.GDplayerObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDplayerObjects3[0].getPointX("")), (( gdjs.MainCode.GDplayerObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDplayerObjects3[0].getPointY("")), "");
}
{ //Subevents
gdjs.MainCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8393764);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.MainCode.GDplayerObjects2, gdjs.MainCode.GDplayerObjects3);

gdjs.MainCode.GDplayerProjObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDplayerProjObjects3Objects, (( gdjs.MainCode.GDplayerObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDplayerObjects3[0].getPointX("")), (( gdjs.MainCode.GDplayerObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDplayerObjects3[0].getPointY("")), "");
}
{ //Subevents
gdjs.MainCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8395068);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.MainCode.GDplayerObjects2, gdjs.MainCode.GDplayerObjects3);

gdjs.MainCode.GDplayerProjObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDplayerProjObjects3Objects, (( gdjs.MainCode.GDplayerObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDplayerObjects3[0].getPointX("")), (( gdjs.MainCode.GDplayerObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDplayerObjects3[0].getPointY("")), "");
}
{ //Subevents
gdjs.MainCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8396428);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDplayerObjects2 */
gdjs.MainCode.GDplayerProjObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDplayerProjObjects2Objects, (( gdjs.MainCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDplayerObjects2[0].getPointX("")), (( gdjs.MainCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDplayerObjects2[0].getPointY("")), "");
}
{ //Subevents
gdjs.MainCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.MainCode.eventsList10 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("arenaWall"), gdjs.MainCode.GDarenaWallObjects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainCode.GDplayerObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDplayerObjects2Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDarenaWallObjects2Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDarenaWallObjects2 */
/* Reuse gdjs.MainCode.GDplayerObjects2 */
{}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("enemyBee"), gdjs.MainCode.GDenemyBeeObjects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainCode.GDplayerObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDplayerObjects2Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDenemyBeeObjects2Objects, false, runtimeScene, false);
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8387732);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDenemyBeeObjects2 */
/* Reuse gdjs.MainCode.GDplayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("stats"), gdjs.MainCode.GDstatsObjects2);
{for(var i = 0, len = gdjs.MainCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDplayerObjects2[i].returnVariable(gdjs.MainCode.GDplayerObjects2[i].getVariables().getFromIndex(0)).sub((gdjs.RuntimeObject.getVariableNumber(((gdjs.MainCode.GDenemyBeeObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDenemyBeeObjects2[0].getVariables()).getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.MainCode.GDstatsObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDstatsObjects2[i].setString("Health: " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(0))) + " / " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(2))) + gdjs.evtTools.string.newLine() + "Damage: " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(1))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemyCow"), gdjs.MainCode.GDenemyCowObjects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainCode.GDplayerObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDplayerObjects2Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDenemyCowObjects2Objects, false, runtimeScene, false);
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8389052);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDenemyCowObjects2 */
/* Reuse gdjs.MainCode.GDplayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("stats"), gdjs.MainCode.GDstatsObjects2);
{for(var i = 0, len = gdjs.MainCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDplayerObjects2[i].returnVariable(gdjs.MainCode.GDplayerObjects2[i].getVariables().getFromIndex(0)).sub((gdjs.RuntimeObject.getVariableNumber(((gdjs.MainCode.GDenemyCowObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDenemyCowObjects2[0].getVariables()).getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.MainCode.GDstatsObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDstatsObjects2[i].setString("Health: " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(0))) + " / " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(2))) + gdjs.evtTools.string.newLine() + "Damage: " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(1))));
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8390284);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainCode.GDplayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("stats"), gdjs.MainCode.GDstatsObjects2);
{for(var i = 0, len = gdjs.MainCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDplayerObjects2[i].returnVariable(gdjs.MainCode.GDplayerObjects2[i].getVariables().getFromIndex(0)).sub(0);
}
}{for(var i = 0, len = gdjs.MainCode.GDstatsObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDstatsObjects2[i].setString("Health: " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(0))) + " / " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(2))) + gdjs.evtTools.string.newLine() + "Damage: " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(1))));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainCode.GDplayerObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDplayerObjects2[i].getVariableNumber(gdjs.MainCode.GDplayerObjects2[i].getVariables().getFromIndex(0)) > 0 ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDplayerObjects2[k] = gdjs.MainCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDplayerObjects2.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainCode.eventsList9(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainCode.GDplayerObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDplayerObjects2[i].getY() > 0 ) {
        gdjs.MainCode.condition1IsTrue_0.val = true;
        gdjs.MainCode.GDplayerObjects2[k] = gdjs.MainCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDplayerObjects2.length = k;}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDplayerObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDplayerObjects2[i].addPolarForce(270, 200, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainCode.GDplayerObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDplayerObjects2[i].getY() < 510 ) {
        gdjs.MainCode.condition1IsTrue_0.val = true;
        gdjs.MainCode.GDplayerObjects2[k] = gdjs.MainCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDplayerObjects2.length = k;}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDplayerObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDplayerObjects2[i].addPolarForce(90, 200, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainCode.GDplayerObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDplayerObjects2[i].getX() > 0 ) {
        gdjs.MainCode.condition1IsTrue_0.val = true;
        gdjs.MainCode.GDplayerObjects2[k] = gdjs.MainCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDplayerObjects2.length = k;}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDplayerObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDplayerObjects2[i].addPolarForce(180, 200, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainCode.GDplayerObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDplayerObjects2[i].getX() < 670 ) {
        gdjs.MainCode.condition1IsTrue_0.val = true;
        gdjs.MainCode.GDplayerObjects2[k] = gdjs.MainCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDplayerObjects2.length = k;}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDplayerObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDplayerObjects2[i].addPolarForce(0, 200, 0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainCode.GDplayerObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDplayerObjects1[i].getVariableNumber(gdjs.MainCode.GDplayerObjects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDplayerObjects1[k] = gdjs.MainCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDplayerObjects1.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("enemyBee"), gdjs.MainCode.GDenemyBeeObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemyCow"), gdjs.MainCode.GDenemyCowObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemyRam"), gdjs.MainCode.GDenemyRamObjects1);
/* Reuse gdjs.MainCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDplayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.MainCode.GDenemyBeeObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDenemyBeeObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainCode.GDenemyCowObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDenemyCowObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainCode.GDenemyRamObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDenemyRamObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDenemyBeeObjects2ObjectsGDgdjs_46MainCode_46GDenemyCowObjects2ObjectsGDgdjs_46MainCode_46GDenemyRamObjects2Objects = Hashtable.newFrom({"enemyBee": gdjs.MainCode.GDenemyBeeObjects2, "enemyCow": gdjs.MainCode.GDenemyCowObjects2, "enemyRam": gdjs.MainCode.GDenemyRamObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDarenaWallObjects2Objects = Hashtable.newFrom({"arenaWall": gdjs.MainCode.GDarenaWallObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDarenaWallObjects2Objects = Hashtable.newFrom({"arenaWall": gdjs.MainCode.GDarenaWallObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDarenaWallObjects2Objects = Hashtable.newFrom({"arenaWall": gdjs.MainCode.GDarenaWallObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDarenaWallObjects2Objects = Hashtable.newFrom({"arenaWall": gdjs.MainCode.GDarenaWallObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDplayerProjObjects2Objects = Hashtable.newFrom({"playerProj": gdjs.MainCode.GDplayerProjObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDenemyBeeObjects2ObjectsGDgdjs_46MainCode_46GDenemyCowObjects2ObjectsGDgdjs_46MainCode_46GDenemyRamObjects2Objects = Hashtable.newFrom({"enemyBee": gdjs.MainCode.GDenemyBeeObjects2, "enemyCow": gdjs.MainCode.GDenemyCowObjects2, "enemyRam": gdjs.MainCode.GDenemyRamObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDdmgUpObjects3Objects = Hashtable.newFrom({"dmgUp": gdjs.MainCode.GDdmgUpObjects3});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDhpUpObjects3Objects = Hashtable.newFrom({"hpUp": gdjs.MainCode.GDhpUpObjects3});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDhealObjects2Objects = Hashtable.newFrom({"heal": gdjs.MainCode.GDhealObjects2});gdjs.MainCode.eventsList11 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.MainCode.GDenemyBeeObjects2, gdjs.MainCode.GDenemyBeeObjects3);

gdjs.copyArray(gdjs.MainCode.GDenemyCowObjects2, gdjs.MainCode.GDenemyCowObjects3);

gdjs.copyArray(gdjs.MainCode.GDenemyRamObjects2, gdjs.MainCode.GDenemyRamObjects3);

gdjs.MainCode.GDdmgUpObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDdmgUpObjects3Objects, (( gdjs.MainCode.GDenemyRamObjects3.length === 0 ) ? (( gdjs.MainCode.GDenemyCowObjects3.length === 0 ) ? (( gdjs.MainCode.GDenemyBeeObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDenemyBeeObjects3[0].getPointX("")) :gdjs.MainCode.GDenemyCowObjects3[0].getPointX("")) :gdjs.MainCode.GDenemyRamObjects3[0].getPointX("")), (( gdjs.MainCode.GDenemyRamObjects3.length === 0 ) ? (( gdjs.MainCode.GDenemyCowObjects3.length === 0 ) ? (( gdjs.MainCode.GDenemyBeeObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDenemyBeeObjects3[0].getPointY("")) :gdjs.MainCode.GDenemyCowObjects3[0].getPointY("")) :gdjs.MainCode.GDenemyRamObjects3[0].getPointY("")), "");
}{gdjs.evtTools.common.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(1));
}{for(var i = 0, len = gdjs.MainCode.GDdmgUpObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDdmgUpObjects3[i].setWidth(50);
}
}{for(var i = 0, len = gdjs.MainCode.GDdmgUpObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDdmgUpObjects3[i].setHeight(50);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 3;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.MainCode.GDenemyBeeObjects2, gdjs.MainCode.GDenemyBeeObjects3);

gdjs.copyArray(gdjs.MainCode.GDenemyCowObjects2, gdjs.MainCode.GDenemyCowObjects3);

gdjs.copyArray(gdjs.MainCode.GDenemyRamObjects2, gdjs.MainCode.GDenemyRamObjects3);

gdjs.MainCode.GDhpUpObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDhpUpObjects3Objects, (( gdjs.MainCode.GDenemyRamObjects3.length === 0 ) ? (( gdjs.MainCode.GDenemyCowObjects3.length === 0 ) ? (( gdjs.MainCode.GDenemyBeeObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDenemyBeeObjects3[0].getPointX("")) :gdjs.MainCode.GDenemyCowObjects3[0].getPointX("")) :gdjs.MainCode.GDenemyRamObjects3[0].getPointX("")), (( gdjs.MainCode.GDenemyRamObjects3.length === 0 ) ? (( gdjs.MainCode.GDenemyCowObjects3.length === 0 ) ? (( gdjs.MainCode.GDenemyBeeObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDenemyBeeObjects3[0].getPointY("")) :gdjs.MainCode.GDenemyCowObjects3[0].getPointY("")) :gdjs.MainCode.GDenemyRamObjects3[0].getPointY("")), "");
}{gdjs.evtTools.common.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(1));
}{for(var i = 0, len = gdjs.MainCode.GDhpUpObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDhpUpObjects3[i].setHeight(50);
}
}{for(var i = 0, len = gdjs.MainCode.GDhpUpObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDhpUpObjects3[i].setWidth(50);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 4;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDenemyBeeObjects2 */
/* Reuse gdjs.MainCode.GDenemyCowObjects2 */
/* Reuse gdjs.MainCode.GDenemyRamObjects2 */
gdjs.MainCode.GDhealObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDhealObjects2Objects, (( gdjs.MainCode.GDenemyRamObjects2.length === 0 ) ? (( gdjs.MainCode.GDenemyCowObjects2.length === 0 ) ? (( gdjs.MainCode.GDenemyBeeObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDenemyBeeObjects2[0].getPointX("")) :gdjs.MainCode.GDenemyCowObjects2[0].getPointX("")) :gdjs.MainCode.GDenemyRamObjects2[0].getPointX("")), (( gdjs.MainCode.GDenemyRamObjects2.length === 0 ) ? (( gdjs.MainCode.GDenemyCowObjects2.length === 0 ) ? (( gdjs.MainCode.GDenemyBeeObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDenemyBeeObjects2[0].getPointY("")) :gdjs.MainCode.GDenemyCowObjects2[0].getPointY("")) :gdjs.MainCode.GDenemyRamObjects2[0].getPointY("")), "");
}{gdjs.evtTools.common.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(1));
}{for(var i = 0, len = gdjs.MainCode.GDhealObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDhealObjects2[i].setWidth(50);
}
}{for(var i = 0, len = gdjs.MainCode.GDhealObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDhealObjects2[i].setHeight(50);
}
}}

}


};gdjs.MainCode.eventsList12 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "beeSpawn", 0, 0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(6);
}{gdjs.evtTools.common.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(2));
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "cowSpawn", 0, 0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(5);
}{gdjs.evtTools.common.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(2));
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 2;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "sheepSpawn", 0, 0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(6);
}{gdjs.evtTools.common.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(2));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("enemyBee"), gdjs.MainCode.GDenemyBeeObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemyCow"), gdjs.MainCode.GDenemyCowObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemyRam"), gdjs.MainCode.GDenemyRamObjects1);
{for(var i = 0, len = gdjs.MainCode.GDenemyBeeObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDenemyBeeObjects1[i].addPolarForce(gdjs.randomInRange(0, 360), 200, 1);
}
for(var i = 0, len = gdjs.MainCode.GDenemyCowObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDenemyCowObjects1[i].addPolarForce(gdjs.randomInRange(0, 360), 200, 1);
}
for(var i = 0, len = gdjs.MainCode.GDenemyRamObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDenemyRamObjects1[i].addPolarForce(gdjs.randomInRange(0, 360), 200, 1);
}
}}

}


};gdjs.MainCode.eventsList13 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("arenaWall"), gdjs.MainCode.GDarenaWallObjects2);
gdjs.copyArray(runtimeScene.getObjects("enemyBee"), gdjs.MainCode.GDenemyBeeObjects2);
gdjs.copyArray(runtimeScene.getObjects("enemyCow"), gdjs.MainCode.GDenemyCowObjects2);
gdjs.copyArray(runtimeScene.getObjects("enemyRam"), gdjs.MainCode.GDenemyRamObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDenemyBeeObjects2ObjectsGDgdjs_46MainCode_46GDenemyCowObjects2ObjectsGDgdjs_46MainCode_46GDenemyRamObjects2Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDarenaWallObjects2Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDarenaWallObjects2 */
/* Reuse gdjs.MainCode.GDenemyBeeObjects2 */
/* Reuse gdjs.MainCode.GDenemyCowObjects2 */
/* Reuse gdjs.MainCode.GDenemyRamObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDenemyBeeObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDenemyBeeObjects2[i].getBehavior("Bounce").BounceOff(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDarenaWallObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.MainCode.GDenemyCowObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDenemyCowObjects2[i].getBehavior("Bounce").BounceOff(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDarenaWallObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.MainCode.GDenemyRamObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDenemyRamObjects2[i].getBehavior("Bounce").BounceOff(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDarenaWallObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("enemyBee"), gdjs.MainCode.GDenemyBeeObjects2);
gdjs.copyArray(runtimeScene.getObjects("enemyCow"), gdjs.MainCode.GDenemyCowObjects2);
gdjs.copyArray(runtimeScene.getObjects("enemyRam"), gdjs.MainCode.GDenemyRamObjects2);
gdjs.copyArray(runtimeScene.getObjects("playerProj"), gdjs.MainCode.GDplayerProjObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDplayerProjObjects2Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDenemyBeeObjects2ObjectsGDgdjs_46MainCode_46GDenemyCowObjects2ObjectsGDgdjs_46MainCode_46GDenemyRamObjects2Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDenemyBeeObjects2 */
/* Reuse gdjs.MainCode.GDenemyCowObjects2 */
/* Reuse gdjs.MainCode.GDenemyRamObjects2 */
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainCode.GDplayerObjects2);
/* Reuse gdjs.MainCode.GDplayerProjObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDplayerProjObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDplayerProjObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.MainCode.GDenemyBeeObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDenemyBeeObjects2[i].returnVariable(gdjs.MainCode.GDenemyBeeObjects2[i].getVariables().get("hp")).sub((gdjs.RuntimeObject.getVariableNumber(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(1))));
}
for(var i = 0, len = gdjs.MainCode.GDenemyCowObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDenemyCowObjects2[i].returnVariable(gdjs.MainCode.GDenemyCowObjects2[i].getVariables().get("hp")).sub((gdjs.RuntimeObject.getVariableNumber(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(1))));
}
for(var i = 0, len = gdjs.MainCode.GDenemyRamObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDenemyRamObjects2[i].returnVariable(gdjs.MainCode.GDenemyRamObjects2[i].getVariables().get("hp")).sub((gdjs.RuntimeObject.getVariableNumber(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(1))));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("enemyBee"), gdjs.MainCode.GDenemyBeeObjects2);
gdjs.copyArray(runtimeScene.getObjects("enemyCow"), gdjs.MainCode.GDenemyCowObjects2);
gdjs.copyArray(runtimeScene.getObjects("enemyRam"), gdjs.MainCode.GDenemyRamObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDenemyBeeObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDenemyBeeObjects2[i].getVariableNumber(gdjs.MainCode.GDenemyBeeObjects2[i].getVariables().get("hp")) <= 0 ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDenemyBeeObjects2[k] = gdjs.MainCode.GDenemyBeeObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDenemyBeeObjects2.length = k;for(var i = 0, k = 0, l = gdjs.MainCode.GDenemyCowObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDenemyCowObjects2[i].getVariableNumber(gdjs.MainCode.GDenemyCowObjects2[i].getVariables().get("hp")) <= 0 ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDenemyCowObjects2[k] = gdjs.MainCode.GDenemyCowObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDenemyCowObjects2.length = k;for(var i = 0, k = 0, l = gdjs.MainCode.GDenemyRamObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDenemyRamObjects2[i].getVariableNumber(gdjs.MainCode.GDenemyRamObjects2[i].getVariables().get("hp")) <= 0 ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDenemyRamObjects2[k] = gdjs.MainCode.GDenemyRamObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDenemyRamObjects2.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDenemyBeeObjects2 */
/* Reuse gdjs.MainCode.GDenemyCowObjects2 */
/* Reuse gdjs.MainCode.GDenemyRamObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDenemyBeeObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDenemyBeeObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainCode.GDenemyCowObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDenemyCowObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainCode.GDenemyRamObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDenemyRamObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.randomInRange(0, 8));
}
{ //Subevents
gdjs.MainCode.eventsList11(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.randomInRange(0, 2));
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}
{ //Subevents
gdjs.MainCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDcheatMenuObjects2Objects = Hashtable.newFrom({"cheatMenu": gdjs.MainCode.GDcheatMenuObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDcheatMenuObjects2Objects = Hashtable.newFrom({"cheatMenu": gdjs.MainCode.GDcheatMenuObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDgodModeCheatObjects2Objects = Hashtable.newFrom({"godModeCheat": gdjs.MainCode.GDgodModeCheatObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDdamageCheatObjects2Objects = Hashtable.newFrom({"damageCheat": gdjs.MainCode.GDdamageCheatObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDhpUpCheatObjects2Objects = Hashtable.newFrom({"hpUpCheat": gdjs.MainCode.GDhpUpCheatObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDdmgUpCheatObjects1Objects = Hashtable.newFrom({"dmgUpCheat": gdjs.MainCode.GDdmgUpCheatObjects1});gdjs.MainCode.eventsList14 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("cheatMenu"), gdjs.MainCode.GDcheatMenuObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
gdjs.MainCode.condition2IsTrue_0.val = false;
gdjs.MainCode.condition3IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDcheatMenuObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
gdjs.MainCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MainCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDcheatMenuObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDcheatMenuObjects2[i].timerElapsedTime("buffer", 0.5) ) {
        gdjs.MainCode.condition3IsTrue_0.val = true;
        gdjs.MainCode.GDcheatMenuObjects2[k] = gdjs.MainCode.GDcheatMenuObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDcheatMenuObjects2.length = k;}}
}
}
if (gdjs.MainCode.condition3IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDcheatMenuObjects2 */
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "cheatMenu", 0, 0);
}{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}{for(var i = 0, len = gdjs.MainCode.GDcheatMenuObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDcheatMenuObjects2[i].resetTimer("buffer");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cheatMenu"), gdjs.MainCode.GDcheatMenuObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
gdjs.MainCode.condition2IsTrue_0.val = false;
gdjs.MainCode.condition3IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDcheatMenuObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
gdjs.MainCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MainCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDcheatMenuObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDcheatMenuObjects2[i].timerElapsedTime("buffer", 0.5) ) {
        gdjs.MainCode.condition3IsTrue_0.val = true;
        gdjs.MainCode.GDcheatMenuObjects2[k] = gdjs.MainCode.GDcheatMenuObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDcheatMenuObjects2.length = k;}}
}
}
if (gdjs.MainCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cheatBG"), gdjs.MainCode.GDcheatBGObjects2);
/* Reuse gdjs.MainCode.GDcheatMenuObjects2 */
gdjs.copyArray(runtimeScene.getObjects("damageCheat"), gdjs.MainCode.GDdamageCheatObjects2);
gdjs.copyArray(runtimeScene.getObjects("dmgUpCheat"), gdjs.MainCode.GDdmgUpCheatObjects2);
gdjs.copyArray(runtimeScene.getObjects("godModeCheat"), gdjs.MainCode.GDgodModeCheatObjects2);
gdjs.copyArray(runtimeScene.getObjects("hpUpCheat"), gdjs.MainCode.GDhpUpCheatObjects2);
{for(var i = 0, len = gdjs.MainCode.GDgodModeCheatObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDgodModeCheatObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainCode.GDdamageCheatObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDdamageCheatObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainCode.GDhpUpCheatObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDhpUpCheatObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainCode.GDdmgUpCheatObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDdmgUpCheatObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainCode.GDcheatBGObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDcheatBGObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).sub(1);
}{for(var i = 0, len = gdjs.MainCode.GDcheatMenuObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDcheatMenuObjects2[i].resetTimer("buffer");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("godModeCheat"), gdjs.MainCode.GDgodModeCheatObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDgodModeCheatObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainCode.GDplayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("stats"), gdjs.MainCode.GDstatsObjects2);
{for(var i = 0, len = gdjs.MainCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDplayerObjects2[i].returnVariable(gdjs.MainCode.GDplayerObjects2[i].getVariables().getFromIndex(0)).setNumber(1000);
}
}{for(var i = 0, len = gdjs.MainCode.GDstatsObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDstatsObjects2[i].setString("Health: " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(0))) + " / " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(2))) + gdjs.evtTools.string.newLine() + "Damage: " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(1))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("damageCheat"), gdjs.MainCode.GDdamageCheatObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDdamageCheatObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainCode.GDplayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("stats"), gdjs.MainCode.GDstatsObjects2);
{for(var i = 0, len = gdjs.MainCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDplayerObjects2[i].returnVariable(gdjs.MainCode.GDplayerObjects2[i].getVariables().getFromIndex(1)).setNumber(100);
}
}{for(var i = 0, len = gdjs.MainCode.GDstatsObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDstatsObjects2[i].setString("Health: " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(0))) + " / " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(2))) + gdjs.evtTools.string.newLine() + "Damage: " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(1))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("hpUpCheat"), gdjs.MainCode.GDhpUpCheatObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDhpUpCheatObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainCode.GDplayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("stats"), gdjs.MainCode.GDstatsObjects2);
{for(var i = 0, len = gdjs.MainCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDplayerObjects2[i].returnVariable(gdjs.MainCode.GDplayerObjects2[i].getVariables().getFromIndex(0)).add(1);
}
}{for(var i = 0, len = gdjs.MainCode.GDstatsObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDstatsObjects2[i].setString("Health: " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(0))) + " / " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(2))) + gdjs.evtTools.string.newLine() + "Damage: " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects2[0].getVariables()).getFromIndex(1))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("dmgUpCheat"), gdjs.MainCode.GDdmgUpCheatObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDdmgUpCheatObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.MainCode.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("stats"), gdjs.MainCode.GDstatsObjects1);
{for(var i = 0, len = gdjs.MainCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDplayerObjects1[i].returnVariable(gdjs.MainCode.GDplayerObjects1[i].getVariables().getFromIndex(1)).add(1);
}
}{for(var i = 0, len = gdjs.MainCode.GDstatsObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDstatsObjects1[i].setString("Health: " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects1[0].getVariables()).getFromIndex(0))) + " / " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects1[0].getVariables()).getFromIndex(2))) + gdjs.evtTools.string.newLine() + "Damage: " + (gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDplayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDplayerObjects1[0].getVariables()).getFromIndex(1))));
}
}}

}


};gdjs.MainCode.eventsList15 = function(runtimeScene) {

{


gdjs.MainCode.eventsList1(runtimeScene);
}


{


gdjs.MainCode.eventsList4(runtimeScene);
}


{


gdjs.MainCode.eventsList10(runtimeScene);
}


{


gdjs.MainCode.eventsList13(runtimeScene);
}


{


gdjs.MainCode.eventsList14(runtimeScene);
}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDplayerObjects1.length = 0;
gdjs.MainCode.GDplayerObjects2.length = 0;
gdjs.MainCode.GDplayerObjects3.length = 0;
gdjs.MainCode.GDplayerObjects4.length = 0;
gdjs.MainCode.GDenemyBeeObjects1.length = 0;
gdjs.MainCode.GDenemyBeeObjects2.length = 0;
gdjs.MainCode.GDenemyBeeObjects3.length = 0;
gdjs.MainCode.GDenemyBeeObjects4.length = 0;
gdjs.MainCode.GDenemyCowObjects1.length = 0;
gdjs.MainCode.GDenemyCowObjects2.length = 0;
gdjs.MainCode.GDenemyCowObjects3.length = 0;
gdjs.MainCode.GDenemyCowObjects4.length = 0;
gdjs.MainCode.GDenemyRamObjects1.length = 0;
gdjs.MainCode.GDenemyRamObjects2.length = 0;
gdjs.MainCode.GDenemyRamObjects3.length = 0;
gdjs.MainCode.GDenemyRamObjects4.length = 0;
gdjs.MainCode.GDstatsObjects1.length = 0;
gdjs.MainCode.GDstatsObjects2.length = 0;
gdjs.MainCode.GDstatsObjects3.length = 0;
gdjs.MainCode.GDstatsObjects4.length = 0;
gdjs.MainCode.GDlevelObjects1.length = 0;
gdjs.MainCode.GDlevelObjects2.length = 0;
gdjs.MainCode.GDlevelObjects3.length = 0;
gdjs.MainCode.GDlevelObjects4.length = 0;
gdjs.MainCode.GDcheatMenuObjects1.length = 0;
gdjs.MainCode.GDcheatMenuObjects2.length = 0;
gdjs.MainCode.GDcheatMenuObjects3.length = 0;
gdjs.MainCode.GDcheatMenuObjects4.length = 0;
gdjs.MainCode.GDdmgUpObjects1.length = 0;
gdjs.MainCode.GDdmgUpObjects2.length = 0;
gdjs.MainCode.GDdmgUpObjects3.length = 0;
gdjs.MainCode.GDdmgUpObjects4.length = 0;
gdjs.MainCode.GDhpUpObjects1.length = 0;
gdjs.MainCode.GDhpUpObjects2.length = 0;
gdjs.MainCode.GDhpUpObjects3.length = 0;
gdjs.MainCode.GDhpUpObjects4.length = 0;
gdjs.MainCode.GDplayerProjObjects1.length = 0;
gdjs.MainCode.GDplayerProjObjects2.length = 0;
gdjs.MainCode.GDplayerProjObjects3.length = 0;
gdjs.MainCode.GDplayerProjObjects4.length = 0;
gdjs.MainCode.GDtestTextObjects1.length = 0;
gdjs.MainCode.GDtestTextObjects2.length = 0;
gdjs.MainCode.GDtestTextObjects3.length = 0;
gdjs.MainCode.GDtestTextObjects4.length = 0;
gdjs.MainCode.GDarenaWallObjects1.length = 0;
gdjs.MainCode.GDarenaWallObjects2.length = 0;
gdjs.MainCode.GDarenaWallObjects3.length = 0;
gdjs.MainCode.GDarenaWallObjects4.length = 0;
gdjs.MainCode.GDhealObjects1.length = 0;
gdjs.MainCode.GDhealObjects2.length = 0;
gdjs.MainCode.GDhealObjects3.length = 0;
gdjs.MainCode.GDhealObjects4.length = 0;
gdjs.MainCode.GDgodModeCheatObjects1.length = 0;
gdjs.MainCode.GDgodModeCheatObjects2.length = 0;
gdjs.MainCode.GDgodModeCheatObjects3.length = 0;
gdjs.MainCode.GDgodModeCheatObjects4.length = 0;
gdjs.MainCode.GDdamageCheatObjects1.length = 0;
gdjs.MainCode.GDdamageCheatObjects2.length = 0;
gdjs.MainCode.GDdamageCheatObjects3.length = 0;
gdjs.MainCode.GDdamageCheatObjects4.length = 0;
gdjs.MainCode.GDhpUpCheatObjects1.length = 0;
gdjs.MainCode.GDhpUpCheatObjects2.length = 0;
gdjs.MainCode.GDhpUpCheatObjects3.length = 0;
gdjs.MainCode.GDhpUpCheatObjects4.length = 0;
gdjs.MainCode.GDdmgUpCheatObjects1.length = 0;
gdjs.MainCode.GDdmgUpCheatObjects2.length = 0;
gdjs.MainCode.GDdmgUpCheatObjects3.length = 0;
gdjs.MainCode.GDdmgUpCheatObjects4.length = 0;
gdjs.MainCode.GDcheatBGObjects1.length = 0;
gdjs.MainCode.GDcheatBGObjects2.length = 0;
gdjs.MainCode.GDcheatBGObjects3.length = 0;
gdjs.MainCode.GDcheatBGObjects4.length = 0;
gdjs.MainCode.GDcontrolsTextObjects1.length = 0;
gdjs.MainCode.GDcontrolsTextObjects2.length = 0;
gdjs.MainCode.GDcontrolsTextObjects3.length = 0;
gdjs.MainCode.GDcontrolsTextObjects4.length = 0;
gdjs.MainCode.GDcheatTextObjects1.length = 0;
gdjs.MainCode.GDcheatTextObjects2.length = 0;
gdjs.MainCode.GDcheatTextObjects3.length = 0;
gdjs.MainCode.GDcheatTextObjects4.length = 0;

gdjs.MainCode.eventsList15(runtimeScene);
return;

}

gdjs['MainCode'] = gdjs.MainCode;
