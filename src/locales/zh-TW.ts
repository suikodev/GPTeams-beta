export default {
  common: {
    add: '新增',
    addSuccess: '新增成功',
    edit: '編輯',
    editSuccess: '編輯成功',
    delete: '刪除',
    deleteSuccess: '刪除成功',
    save: '儲存',
    saveSuccess: '儲存成功',
    reset: '重設',
    action: '操作',
    export: '匯出',
    exportSuccess: '匯出成功',
    import: '匯入',
    importSuccess: '匯入成功',
    clear: '清除',
    clearSuccess: '清除成功',
    yes: '是',
    no: '否',
    confirm: '確認',
    download: '下載',
    noData: '目前無資料',
    wrong: '發生錯誤，請稍後再試。',
    success: '操作成功',
    failed: '操作失敗',
    verify: '驗證',
    goToHomepage: '返回首頁',
  },
  chat: {
    newChatButton: '新建對話',
    placeholder: '來說點什麼...（Shift + Enter = 換行）',
    placeholderMobile: '來說點什麼...',
    copy: '複製',
    copied: '複製成功',
    copyCode: '複製代碼',
    clearChat: '清除對話',
    clearChatConfirm: '是否清空對話?',
    exportImage: '儲存對話為圖片',
    exportImageConfirm: '是否將對話儲存為圖片?',
    exportSuccess: '儲存成功',
    exportFailed: '儲存失敗',
    usingContext: '上下文模式',
    turnOnContext: '啟用上下文模式，在此模式下，發送訊息會包含之前的聊天記錄。',
    turnOffContext: '關閉上下文模式，在此模式下，發送訊息不會包含之前的聊天記錄。',
    deleteMessage: '刪除訊息',
    deleteMessageConfirm: '是否刪除此訊息?',
    deleteHistoryConfirm: '確定刪除此紀錄?',
    clearHistoryConfirm: '確定清除紀錄?',
    preview: '預覽',
    showRawText: '顯示原文',
  },
  setting: {
    setting: '設定',
    general: '總覽',
    advanced: '高級',
    config: '設定',
    avatarLink: '頭貼連結',
    name: '名稱',
    description: '描述',
    role: '角色設定',
    resetUserInfo: '重設使用者資訊',
    chatHistory: '紀錄',
    theme: '主題',
    language: '語言',
    api: 'API',
    reverseProxy: '反向代理',
    timeout: '逾時',
    socks: 'Socks',
    httpsProxy: 'HTTPS Proxy',
    balance: 'API余額',
    canNotBeEmpty: '不可為空',
  },
  store: {
    siderButton: '提示詞商店',
    local: '本機',
    online: '線上',
    title: '標題',
    description: '描述',
    clearStoreConfirm: '是否清除資料？',
    importPlaceholder: '請將 JSON 資料貼在此處',
    addRepeatTitleTips: '標題重複，請重新輸入',
    addRepeatContentTips: '內容重複：{msg}，請重新輸入',
    editRepeatTitleTips: '標題衝突，請重新修改',
    editRepeatContentTips: '內容衝突{msg} ，請重新修改',
    importError: '鍵值不符合',
    importRepeatTitle: '因標題重複跳過：{msg}',
    importRepeatContent: '因內容重複跳過：{msg}',
    onlineImportWarning: '注意：請檢查 JSON 檔案來源！',
    downloadError: '請檢查網路狀態與 JSON 檔案有效性',
  },
  auth: {
    signInTo: '登入{appName}',
    signIn: '登入',
    verificationCode: '驗證碼',
    sendCode: '發送驗證碼',
    login: '登入',
    continue: '繼續',
    invalidVerificationCode: '驗證碼錯誤',
    verificationCodeSent: '驗證碼已發送',
    pleaseTryAgainLater: '請稍後再試',
    invalidVerificationCodeOrExpired: '驗證碼錯誤或已過期',
    invalidEmailLinkOrExpired: 'Email 驗證連結錯誤或已過期',
    phoneNumber: '手機號碼',
    logout: '登出',
    signInWithGoogle: '使用 Google 登入',
    or: '或',
    signInWithEmail: '使用 Email 登入',
    signInWithPhone: '使用手機號碼登入',
    rememberMe: '記住我',
    sendLoginLink: '發送登入連結',
    email: 'Email',
    loginLinkSent: '登入連結已發送',
    finishSignInTo: '完成 {0} 登入',
    finishSignIn: '完成登入',
    finishSignInRequiredEmailTips: '在其他瀏覽器開啟連結？重新輸入電郵完成登入。',
    welcomeBack: '歡迎回來',
    returnToSignInPage: '返回登入頁面',
    waitSecondsToSendMail: '請等待 {seconds} 秒後再發送驗證信',
    signInTips: '歡迎來到 {appName}，請登入以繼續，若無帳號將自動為您註冊。',
    noPermissionToSignIn: '您沒有權限訪問此賬戶。如果您認為這是一個錯誤，請聯繫管理員。',
    error401Title: '未授權訪問',
    error401Content: '您沒有權限訪問此頁面。請檢查您的登錄憑證，如果您認為這是一個錯誤，請聯繫管理員。',
  },
  admin: {
    userManagement: '用戶管理',
    systemSettings: '系統設定',
    enable: '啟用',
    disable: '停用',
    disabled: '停用中',
    enabled: '啟用中',
    delete: '刪除',
    uid: 'UID',
    email: 'Email',
    phoneNumber: '手機號碼',
    displayName: '顯示名稱',
    creationTime: '建立時間',
    lastSignInTime: '最後登入時間',
    signInMethod: '登入方式',
    status: '狀態',
    action: '操作',
    deleteUserConfirmTips: '刪除的用戶將自動加入黑名單，無法再次登入。是否確認刪除？',
    numberOfActiveUsersYesterday: '昨日活躍用戶數',
    numberOfAllUsers: '總用戶數',
    avatar: '頭像',
    mostPopularSignInMethod: '最受歡迎的登入方式',
    googlecom: 'Google',
    password: '密碼',
    phone: '手機號碼',
    githubcom: 'Github',
    microsoftcom: 'Microsoft',
    configureBlacklist: '設定黑名單',
    configureBlacklistTips: '黑名單中的用戶將無法登入，一行一個 Email，支援正規表達式。',
    configureWhitelist: '設定白名單',
    configureWhitelistTips: '白名單之外的用戶將無法登入，一行一個 Email，支援正規表達式。',
    configureOpenaiApiKey: '設定 OpenAI API Key',
    configureOpenaiApiKeyTips: '您的 OpenAI Key 將會被安全存儲，提交後不會再返回至客戶端。在這裡獲取您的 OpenAI API Key：https://beta.openai.com/account/api-keys',
    configureChatgptModel: '設定 ChatGPT 模型',
    update: '更新',
    tagsInputPlaceholder: '輸入並按回車鍵添加',
  },
}
