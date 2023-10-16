import { expect, test } from 'vitest'

import * as number from './number.js'

test('exports number', () => {
  expect(number).toMatchInlineSnapshot(`
    {
      "maxInt104": 10141204801825835211973625643007n,
      "maxInt112": 2596148429267413814265248164610047n,
      "maxInt120": 664613997892457936451903530140172287n,
      "maxInt128": 170141183460469231731687303715884105727n,
      "maxInt136": 43556142965880123323311949751266331066367n,
      "maxInt144": 11150372599265311570767859136324180752990207n,
      "maxInt152": 2854495385411919762116571938898990272765493247n,
      "maxInt16": 32767n,
      "maxInt160": 730750818665451459101842416358141509827966271487n,
      "maxInt168": 187072209578355573530071658587684226515959365500927n,
      "maxInt176": 47890485652059026823698344598447161988085597568237567n,
      "maxInt184": 12259964326927110866866776217202473468949912977468817407n,
      "maxInt192": 3138550867693340381917894711603833208051177722232017256447n,
      "maxInt200": 803469022129495137770981046170581301261101496891396417650687n,
      "maxInt208": 205688069665150755269371147819668813122841983204197482918576127n,
      "maxInt216": 52656145834278593348959013841835216159447547700274555627155488767n,
      "maxInt224": 13479973333575319897333507543509815336818572211270286240551805124607n,
      "maxInt232": 3450873173395281893717377931138512726225554486085193277581262111899647n,
      "maxInt24": 8388607n,
      "maxInt240": 883423532389192164791648750371459257913741948437809479060803100646309887n,
      "maxInt248": 226156424291633194186662080095093570025917938800079226639565593765455331327n,
      "maxInt256": 57896044618658097711785492504343953926634992332820282019728792003956564819967n,
      "maxInt32": 2147483647n,
      "maxInt40": 549755813887n,
      "maxInt48": 140737488355327n,
      "maxInt56": 36028797018963967n,
      "maxInt64": 9223372036854775807n,
      "maxInt72": 2361183241434822606847n,
      "maxInt8": 127n,
      "maxInt80": 604462909807314587353087n,
      "maxInt88": 154742504910672534362390527n,
      "maxInt96": 39614081257132168796771975167n,
      "maxUint104": 20282409603651670423947251286015n,
      "maxUint112": 5192296858534827628530496329220095n,
      "maxUint120": 1329227995784915872903807060280344575n,
      "maxUint128": 340282366920938463463374607431768211455n,
      "maxUint136": 87112285931760246646623899502532662132735n,
      "maxUint144": 22300745198530623141535718272648361505980415n,
      "maxUint152": 5708990770823839524233143877797980545530986495n,
      "maxUint16": 65535n,
      "maxUint160": 1461501637330902918203684832716283019655932542975n,
      "maxUint168": 374144419156711147060143317175368453031918731001855n,
      "maxUint176": 95780971304118053647396689196894323976171195136475135n,
      "maxUint184": 24519928653854221733733552434404946937899825954937634815n,
      "maxUint192": 6277101735386680763835789423207666416102355444464034512895n,
      "maxUint200": 1606938044258990275541962092341162602522202993782792835301375n,
      "maxUint208": 411376139330301510538742295639337626245683966408394965837152255n,
      "maxUint216": 105312291668557186697918027683670432318895095400549111254310977535n,
      "maxUint224": 26959946667150639794667015087019630673637144422540572481103610249215n,
      "maxUint232": 6901746346790563787434755862277025452451108972170386555162524223799295n,
      "maxUint24": 16777215n,
      "maxUint240": 1766847064778384329583297500742918515827483896875618958121606201292619775n,
      "maxUint248": 452312848583266388373324160190187140051835877600158453279131187530910662655n,
      "maxUint256": 115792089237316195423570985008687907853269984665640564039457584007913129639935n,
      "maxUint32": 4294967295n,
      "maxUint40": 1099511627775n,
      "maxUint48": 281474976710655n,
      "maxUint56": 72057594037927935n,
      "maxUint64": 18446744073709551615n,
      "maxUint72": 4722366482869645213695n,
      "maxUint8": 255n,
      "maxUint80": 1208925819614629174706175n,
      "maxUint88": 309485009821345068724781055n,
      "maxUint96": 79228162514264337593543950335n,
      "minInt104": -10141204801825835211973625643008n,
      "minInt112": -2596148429267413814265248164610048n,
      "minInt120": -664613997892457936451903530140172288n,
      "minInt128": -170141183460469231731687303715884105728n,
      "minInt136": -43556142965880123323311949751266331066368n,
      "minInt144": -11150372599265311570767859136324180752990208n,
      "minInt152": -2854495385411919762116571938898990272765493248n,
      "minInt16": -32768n,
      "minInt160": -730750818665451459101842416358141509827966271488n,
      "minInt168": -187072209578355573530071658587684226515959365500928n,
      "minInt176": -47890485652059026823698344598447161988085597568237568n,
      "minInt184": -12259964326927110866866776217202473468949912977468817408n,
      "minInt192": -3138550867693340381917894711603833208051177722232017256448n,
      "minInt200": -803469022129495137770981046170581301261101496891396417650688n,
      "minInt208": -205688069665150755269371147819668813122841983204197482918576128n,
      "minInt216": -52656145834278593348959013841835216159447547700274555627155488768n,
      "minInt224": -13479973333575319897333507543509815336818572211270286240551805124608n,
      "minInt232": -3450873173395281893717377931138512726225554486085193277581262111899648n,
      "minInt24": -8388608n,
      "minInt240": -883423532389192164791648750371459257913741948437809479060803100646309888n,
      "minInt248": -226156424291633194186662080095093570025917938800079226639565593765455331328n,
      "minInt256": -57896044618658097711785492504343953926634992332820282019728792003956564819968n,
      "minInt32": -2147483648n,
      "minInt40": -549755813888n,
      "minInt48": -140737488355328n,
      "minInt56": -36028797018963968n,
      "minInt64": -9223372036854775808n,
      "minInt72": -2361183241434822606848n,
      "minInt8": -128n,
      "minInt80": -604462909807314587353088n,
      "minInt88": -154742504910672534362390528n,
      "minInt96": -39614081257132168796771975168n,
    }
  `)
})