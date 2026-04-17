gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.idToCallbackMap = new Map();
gdjs.menuCode.GDTinyBlueButtonObjects1= [];
gdjs.menuCode.GDTinyBlueButtonObjects2= [];
gdjs.menuCode.GDSky_9595BackgroundObjects1= [];
gdjs.menuCode.GDSky_9595BackgroundObjects2= [];
gdjs.menuCode.GDTile_959510_9595tiled_9595spriteObjects1= [];
gdjs.menuCode.GDTile_959510_9595tiled_9595spriteObjects2= [];
gdjs.menuCode.GDTile_959524Objects1= [];
gdjs.menuCode.GDTile_959524Objects2= [];
gdjs.menuCode.GDTile_95953_9595tiled_9595spriteObjects1= [];
gdjs.menuCode.GDTile_95953_9595tiled_9595spriteObjects2= [];
gdjs.menuCode.GDTile_959517Objects1= [];
gdjs.menuCode.GDTile_959517Objects2= [];
gdjs.menuCode.GDTile_959526Objects1= [];
gdjs.menuCode.GDTile_959526Objects2= [];
gdjs.menuCode.GDTile_959533_9595tiled_9595spriteObjects1= [];
gdjs.menuCode.GDTile_959533_9595tiled_9595spriteObjects2= [];
gdjs.menuCode.GDTile_959537Objects1= [];
gdjs.menuCode.GDTile_959537Objects2= [];
gdjs.menuCode.GDtriggerabajoObjects1= [];
gdjs.menuCode.GDtriggerabajoObjects2= [];
gdjs.menuCode.GDtriggerarribaObjects1= [];
gdjs.menuCode.GDtriggerarribaObjects2= [];
gdjs.menuCode.GDNewSprite3Objects1= [];
gdjs.menuCode.GDNewSprite3Objects2= [];
gdjs.menuCode.GDNewSprite4Objects1= [];
gdjs.menuCode.GDNewSprite4Objects2= [];
gdjs.menuCode.GDCoinObjects1= [];
gdjs.menuCode.GDCoinObjects2= [];


gdjs.menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TinyBlueButton"), gdjs.menuCode.GDTinyBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDTinyBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDTinyBlueButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDTinyBlueButtonObjects1[k] = gdjs.menuCode.GDTinyBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDTinyBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "escena 1", true);
}
}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDTinyBlueButtonObjects1.length = 0;
gdjs.menuCode.GDTinyBlueButtonObjects2.length = 0;
gdjs.menuCode.GDSky_9595BackgroundObjects1.length = 0;
gdjs.menuCode.GDSky_9595BackgroundObjects2.length = 0;
gdjs.menuCode.GDTile_959510_9595tiled_9595spriteObjects1.length = 0;
gdjs.menuCode.GDTile_959510_9595tiled_9595spriteObjects2.length = 0;
gdjs.menuCode.GDTile_959524Objects1.length = 0;
gdjs.menuCode.GDTile_959524Objects2.length = 0;
gdjs.menuCode.GDTile_95953_9595tiled_9595spriteObjects1.length = 0;
gdjs.menuCode.GDTile_95953_9595tiled_9595spriteObjects2.length = 0;
gdjs.menuCode.GDTile_959517Objects1.length = 0;
gdjs.menuCode.GDTile_959517Objects2.length = 0;
gdjs.menuCode.GDTile_959526Objects1.length = 0;
gdjs.menuCode.GDTile_959526Objects2.length = 0;
gdjs.menuCode.GDTile_959533_9595tiled_9595spriteObjects1.length = 0;
gdjs.menuCode.GDTile_959533_9595tiled_9595spriteObjects2.length = 0;
gdjs.menuCode.GDTile_959537Objects1.length = 0;
gdjs.menuCode.GDTile_959537Objects2.length = 0;
gdjs.menuCode.GDtriggerabajoObjects1.length = 0;
gdjs.menuCode.GDtriggerabajoObjects2.length = 0;
gdjs.menuCode.GDtriggerarribaObjects1.length = 0;
gdjs.menuCode.GDtriggerarribaObjects2.length = 0;
gdjs.menuCode.GDNewSprite3Objects1.length = 0;
gdjs.menuCode.GDNewSprite3Objects2.length = 0;
gdjs.menuCode.GDNewSprite4Objects1.length = 0;
gdjs.menuCode.GDNewSprite4Objects2.length = 0;
gdjs.menuCode.GDCoinObjects1.length = 0;
gdjs.menuCode.GDCoinObjects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);
gdjs.menuCode.GDTinyBlueButtonObjects1.length = 0;
gdjs.menuCode.GDTinyBlueButtonObjects2.length = 0;
gdjs.menuCode.GDSky_9595BackgroundObjects1.length = 0;
gdjs.menuCode.GDSky_9595BackgroundObjects2.length = 0;
gdjs.menuCode.GDTile_959510_9595tiled_9595spriteObjects1.length = 0;
gdjs.menuCode.GDTile_959510_9595tiled_9595spriteObjects2.length = 0;
gdjs.menuCode.GDTile_959524Objects1.length = 0;
gdjs.menuCode.GDTile_959524Objects2.length = 0;
gdjs.menuCode.GDTile_95953_9595tiled_9595spriteObjects1.length = 0;
gdjs.menuCode.GDTile_95953_9595tiled_9595spriteObjects2.length = 0;
gdjs.menuCode.GDTile_959517Objects1.length = 0;
gdjs.menuCode.GDTile_959517Objects2.length = 0;
gdjs.menuCode.GDTile_959526Objects1.length = 0;
gdjs.menuCode.GDTile_959526Objects2.length = 0;
gdjs.menuCode.GDTile_959533_9595tiled_9595spriteObjects1.length = 0;
gdjs.menuCode.GDTile_959533_9595tiled_9595spriteObjects2.length = 0;
gdjs.menuCode.GDTile_959537Objects1.length = 0;
gdjs.menuCode.GDTile_959537Objects2.length = 0;
gdjs.menuCode.GDtriggerabajoObjects1.length = 0;
gdjs.menuCode.GDtriggerabajoObjects2.length = 0;
gdjs.menuCode.GDtriggerarribaObjects1.length = 0;
gdjs.menuCode.GDtriggerarribaObjects2.length = 0;
gdjs.menuCode.GDNewSprite3Objects1.length = 0;
gdjs.menuCode.GDNewSprite3Objects2.length = 0;
gdjs.menuCode.GDNewSprite4Objects1.length = 0;
gdjs.menuCode.GDNewSprite4Objects2.length = 0;
gdjs.menuCode.GDCoinObjects1.length = 0;
gdjs.menuCode.GDCoinObjects2.length = 0;


return;

}

gdjs['menuCode'] = gdjs.menuCode;
