# Implementation Plan: Transfer API နှင့် Unit of Measure (UOM) Conversion ချိတ်ဆက်ခြင်း

ဤစာတမ်းသည် **Transfer API** (ပစ္စည်းလွှဲပြောင်းမှုစနစ်) နှင့် သက်ဆိုင်ရာ Frontend UI Modals များကို **Unit of Measure (UOM) Conversion စနစ်** နှင့် ချိတ်ဆက်အကောင်အထည်ဖော်မည့် နည်းပညာပိုင်းဆိုင်ရာ အသေးစိတ် အစီအစဉ်ဖြစ်ပါသည်။

---

## ရည်ရွယ်ချက်နှင့် အနှစ်ချုပ် (Overview & Goal)

လက်ရှိတွင် ကုန်ပစ္စည်းများ၌ Multi-level Unit Conversion သတ်မှတ်ချက်များ (ဥပမာ- Base Unit: `piece` (ခု)၊ Sub-unit: `box` (factor: 12)၊ `carton` (factor: 144)) ကို [inventory.model.js](file:///c:/Users/PC/Desktop/SSP_Project/SSP-backend/src/models/inventory.model.js) တွင် ထည့်သွင်းထားပြီး ဖြစ်ပါသည်။ Purchasing နှင့် GRN အပိုင်းတို့တွင်လည်း သတ်မှတ်ထားသော Packaging Unit များဖြင့် ပစ္စည်းလက်ခံခြင်းကို အောင်မြင်စွာ ချိတ်ဆက်ပြီး ဖြစ်ပါသည်။

ဤအစီအစဉ်တွင် **Transfer စနစ်တစ်ခုလုံး** (GRN $\rightarrow$ Warehouse/Storefront၊ Warehouse $\rightarrow$ Warehouse၊ Warehouse $\rightarrow$ Storefront၊ Storefront $\rightarrow$ Warehouse၊ Storefront $\rightarrow$ Storefront) ၌-
1. အသုံးပြုသူသည် ပစ္စည်းလွှဲပြောင်းရာတွင် မိမိနှစ်သက်ရာ ထုပ်ပိုးမှုယူနစ် (`transferUnit`) ကို ရွေးချယ်လွှဲပြောင်းနိုင်စေရန်။
2. Transfer API မှ [convertToBaseUnit](file:///c:/Users/PC/Desktop/SSP_Project/SSP-backend/src/utils/uom.utils.js) utility ကို အသုံးပြု၍ လွှဲပြောင်းသည့် အရေအတွက်ကို Base Unit အရေအတွက် (`baseQuantity`) အဖြစ် တိကျစွာ ပြောင်းလဲတွက်ချက်ရန်။
3. Stock လက်ကျန်လုံလောက်မှု စစ်ဆေးခြင်း၊ မူလနေရာမှ နှုတ်ခြင်းနှင့် လက်ခံသည့်နေရာသို့ ပေါင်းထည့်ခြင်းများကို **`baseQuantity`** ဖြင့်သာ ဆောင်ရွက်ရန်။
4. [transfer.model.js](file:///c:/Users/PC/Desktop/SSP_Project/SSP-backend/src/models/transfer.model.js) တွင် `transferUnit`, `quantity` နှင့် `baseQuantity` တို့ကို သေချာစွာ သိမ်းဆည်းပြီး Frontend တွင် "၂ ဖာ (၂၄ ခု)" ပုံစံဖြင့် ရှင်းလင်းစွာ ဖော်ပြနိုင်စေရန်။

---

## User Review လိုအပ်ချက်များ (User Review Required)

> [!IMPORTANT]
> - **Backward Compatibility (ယခင်ဒေတာများနှင့် ကိုက်ညီမှု):** ယခင်ရှိပြီးသား Transfer မှတ်တမ်းများ သို့မဟုတ် `transferUnit` မပါဝင်သော Request များအတွက် စနစ်မှ အလိုအလျောက် Product ၏ Base `unitOfMeasure` အဖြစ် သတ်မှတ်ပေးမည်ဖြစ်ပြီး `baseQuantity` ကို `quantity` တန်ဖိုးအတိုင်း ယူဆပါမည်။
> - **Stock Accounting (သိုလှောင်မှုစာရင်း):** `WarehouseStock` နှင့် `StorefrontInventory` ထဲတွင် လက်ကျန်စာရင်းများကို Base Unit ဖြင့်သာ ဆက်လက်ထိန်းသိမ်းထားမည် ဖြစ်သောကြောင့် Unit အခေါ်အဝေါ် အမျိုးမျိုးကြောင့် စာရင်းကွဲလွဲမှု မရှိစေပါ။

---

## ပြုပြင်ပြောင်းလဲမည့် အပိုင်းများ (Proposed Changes)

### Backend

---

#### [MODIFY] [transfer.model.js](file:///c:/Users/PC/Desktop/SSP_Project/SSP-backend/src/models/transfer.model.js)

- `transferLineItemSchema` တွင် အောက်ပါ fields များကို ဖြည့်စွက်ခြင်း-
  - `transferUnit`: String (Required, ထည့်မထားပါက product ၏ base unit အဖြစ် default ယူမည်)
  - `baseQuantity`: Number (Required, အနည်းဆုံး > 0 ရှိရမည်, Base Unit သို့ ပြောင်းထားသော ပမာဏ)
- `updateStock(session)` method နှင့် သက်ဆိုင်ရာ Sub-methods အားလုံးတွင် `baseQuantity` ဖြင့် stock အတိုးအလျှော့ ပြုလုပ်ခြင်း-
  - `_updateGRNToWarehouseStock`
  - `_updateGRNToStorefrontStock`
  - `_updateWarehouseToWarehouseStock`
  - `_updateWarehouseToStorefrontStock`
  - `_updateStorefrontToWarehouseStock`
  - `_updateStorefrontToStorefrontStock`

---

#### [MODIFY] [transfer.controller.js](file:///c:/Users/PC/Desktop/SSP_Project/SSP-backend/src/controllers/transfer.controller.js)

- [uom.utils.js](file:///c:/Users/PC/Desktop/SSP_Project/SSP-backend/src/utils/uom.utils.js) မှ `convertToBaseUnit` ကို import ပြုလုပ်ခြင်း။
- အောက်ပါ Controller handler များတွင် `transferUnit` ကို စစ်ဆေးခြင်း၊ `baseQuantity` တွက်ချက်ခြင်းနှင့် `baseQuantity` ပေါ်မူတည်၍ stock လုံလောက်မှု စစ်ဆေးခြင်းများကို ထည့်သွင်းခြင်း-
  - `createTransfer` (GRN $\rightarrow$ Warehouse, GRN $\rightarrow$ Storefront, Warehouse $\rightarrow$ Storefront)
  - `transferWarehouseToWarehouse`
  - `transferWarehouseToStorefront`
  - `transferStorefrontToWarehouse`
  - `transferStorefrontToStorefront`
- `getTransfers` နှင့် `getTransferById` တွင် `inventoryId` အချက်အလက်များအား `unitOfMeasure` နှင့် `uomConversions` ပါအောင် Populate လုပ်ပေးခြင်း။

---

### Frontend

---

#### [MODIFY] [BatchTransferModal.tsx](file:///c:/Users/PC/Desktop/SSP_Project/SSP-frontend/components/Inventory/BatchTransferModal.tsx)

- Product ၏ `unitOfMeasure` (Base Unit) နှင့် `uomConversions` (Sub-units) များကို ဖတ်ယူ၍ Unit ရွေးချယ်နိုင်သော Dropdown ထည့်သွင်းခြင်း။
- User အရေအတွက် ရိုက်ထည့်ချိန်တွင် တပြိုင်နက်တည်း Base Unit ပမာဏကို ပြသပေးမည့် Live Preview ထည့်သွင်းခြင်း (ဥပမာ- "၂ Boxes = ၂၄ Pieces").
- ရွေးချယ်ထားသော `transferUnit` အချက်အလက်ကို API Request ထဲသို့ ထည့်သွင်းပေးပို့ခြင်း။

---

#### [MODIFY] [TransferWarehouseModal.tsx](file:///c:/Users/PC/Desktop/SSP_Project/SSP-frontend/components/Purchasing/TransferWarehouseModal.tsx)

- GRN မှ ပစ္စည်းလွှဲပြောင်းချိန်တွင် Received Unit သို့မဟုတ် အခြား UOM Conversion unit များကို ထည့်သွင်းပေးပို့နိုင်စေရန် ပြင်ဆင်ခြင်း။

---

#### [MODIFY] [TransferDetailModal.tsx](file:///c:/Users/PC/Desktop/SSP_Project/SSP-frontend/components/Purchasing/TransferDetailModal.tsx) & [TransferList.tsx](file:///c:/Users/PC/Desktop/SSP_Project/SSP-frontend/components/Purchasing/TransferList.tsx)

- Transfer စာရင်းဇယားနှင့် အသေးစိတ် modal များတွင် လွှဲပြောင်းထားသော Unit ရော Base Unit ပါ ဖော်ပြပေးခြင်း (ဥပမာ- `2 Boxes (24 Pieces)`).

---

## စမ်းသပ်စစ်ဆေးမည့် အစီအစဉ် (Verification Plan)

### Automated / API Tests
- Base Unit ဖြင့် ပစ္စည်းလွှဲခြင်း စမ်းသပ်ခြင်း (`quantity: 10`, `transferUnit: "piece"` $\rightarrow$ `baseQuantity: 10`).
- Sub-unit ဖြင့် ပစ္စည်းလွှဲခြင်း စမ်းသပ်ခြင်း (`quantity: 2`, `transferUnit: "box"` (1 box = 12 pcs) $\rightarrow$ `baseQuantity: 24`).
- လက်ကျန်ပစ္စည်းထက် ပိုမိုလွှဲပြောင်းပါက Insufficient Stock Error မှန်ကန်စွာ ပြသခြင်း ရှိမရှိ စစ်ဆေးခြင်း။
- မမှန်ကန်သော Unit အမည် ထည့်သွင်းပါက Validation Error ပြသခြင်း ရှိမရှိ စစ်ဆေးခြင်း။
- Transfer ပြီးဆုံးချိန် (`completed` ဖြစ်ချိန်) တွင် MongoDB Transaction ဖြင့် Stock အတိုးအလျှော့ မှန်ကန်စွာ အလုပ်လုပ်ခြင်း ရှိမရှိ စစ်ဆေးခြင်း။

### Manual Verification
1. Inventory စာမျက်နှာ $\rightarrow$ UOM Conversion သတ်မှတ်ထားသော ပစ္စည်း (ဥပမာ 1 Box = 12 Pcs) ကို ရွေးချယ်ပါ။
2. Batch Transfer Modal ကို ဖွင့်ပါ $\rightarrow$ Unit တွင် "Box" ကို ရွေးပြီး အရေအတွက် `2` ရိုက်ထည့်ပါ။
3. Live Preview တွင် "24 Pieces" ဟု မှန်ကန်စွာ ပေါ်လာခြင်း ရှိမရှိ ကြည့်ရှုပါ။
4. Transfer ကို Submit လုပ်ပါ $\rightarrow$ မူလနေရာတွင် ၂၄ ခု လျော့သွားပြီး ရောက်ရှိမည့်နေရာတွင် ၂၄ ခု တိုးလာခြင်း ရှိမရှိ စစ်ဆေးပါ။
5. Settings $\rightarrow$ Transfer Management တွင် Transfer မှတ်တမ်းကို ကြည့်ရှုပြီး ယူနစ်ဖော်ပြချက်များ မှန်ကန်မှု ရှိမရှိ စစ်ဆေးပါ။
