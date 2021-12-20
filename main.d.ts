declare class msg {
    reply(msg: string): boolean;
    reply(room: string, msg: string, hideToast: boolean = false): boolean;
}

declare class Database {
    /* 앱_데이터_폴더/Database 폴더 내에 fileName이라는 파일을 만들고, data 문자열을 덮어씁니다.
     * fileName에 확장자가 명시되지 않은 경우 확장자는 자동으로 .txt가 됩니다.
     * 최종 파일 내용을 반환합니다. */
    setDataBase(fileName: string, data: string): string;
    
    // 앱_데이터_폴더/Database/fileName 파일을 읽어 내용을 문자열로 반환합니다.
    getDataBase(fileName: string): string;

    // 앱_데이터_폴더/Database/fileName파일에 data를 이어씁니다. 최종 파일 내용을 반환합니다.
    appendDataBase(fileName: string, data: string): string;
    
    /* 앱_데이터_폴더/Database/fileName 파일을 삭제합니다.
     * 앱 옵션에서 삭제시 백업기능을 켜두었을 경우, fileName.bak으로 내용이 백업됩니다.
     * java.io.File.delete()의 결과를 반환합니다. */
    removeDataBase(fileName: string): boolean;
}

declare class AppData {
    // 앱 데이터에 boolean값을 씁니다.
    putBoolean(key: string, boolean: boolean): void;
    
    // 앱 데이터에서 boolean값을 불러옵니다.
    getBoolean(key: string): boolean;

    // 앱 데이터에 정수값을 씁니다.
    putInt(key: string, integer: int): void;

    // 앱 데이터에서 정수값을 불러옵니다.
    getInt(key: string): int;

    // 앱 데이터에 문자열값을 씁니다.
    putString(key: string, string: string): void;

    // 앱 데이터에서 문자열값을 불러옵니다.
    getString(key: string): string;

    // AppData를 통해 저장한 앱 데이터 중 키값에 해당하는 앱 데이터를 지웁니다.
    remove(key: string): void;

    // AppData를 통해 저장한 모든 앱 데이터를 지웁니다.
    clear(): void;
}


