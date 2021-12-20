declare namespace App {
    // 어플리케이션의 Context를 반환합니다.
    function getContext(): android.content.Context;

    // 함수 task를 UIThread에서 호출합니다. 함수task의 작동이 끝나면 함수 onComplete를 호출합니다.
    // onComplete에는 error: Throwable과 task의 반환값이 인자로 주어집니다.
    function runOnUiThread(task: function, onComplete: (err: Throwable, task: Task) => {}): void;
}

declare namespace msg {
    function reply(msg: string): boolean;
    function reply (room: string, msg: string, hideToast: boolean = false): boolean;
}

declare namespace Database {
    // 스크립트 로컬 폴더 내 Database폴더에 파일fileName이 존재할 경우 true, 아니면 false를 반환합니다.
    function exists(fileName: string): boolean;

    // 스크립트 로컬 폴더 내 Database폴더에 있는 파일fileName을 읽어 객체로 반환합니다. (fileName파일이 json일 경우에만 가능합니다.)
    function readObject(fileName: string): object;

    // 스크립트 로컬 폴더 내 Database폴더에 있는 파일fileName의 내용을 문자열로 반환합니다.
    function readString(fileName: string): string;

    // 객체obj를 JSON Strirng으로 변환하여 스크립트 로컬 폴더 내 Database폴더에 있는 파일fileName에 저장합니다.
    function writeObject(fileName: string, obj: object): void;

    // 문자열str을 스크립트 폴더 내 Database폴더에 있는 파일 fileName에 저장합니다.
    function writeObject(fileName: string, str: string): void;
}

declare namespace AppData {
    // 앱 데이터에 boolean값을 씁니다.
    function putBoolean(key: string, boolean: boolean): void;
    
    // 앱 데이터에서 boolean값을 불러옵니다.
    function getBoolean(key: string): boolean;

    // 앱 데이터에 정수값을 씁니다.
    function putInt(key: string, integer: int): void;

    // 앱 데이터에서 정수값을 불러옵니다.
    function getInt(key: string): BigInteger;

    // 앱 데이터에 문자열값을 씁니다.
    function putString(key: string, string: string): void;

    // 앱 데이터에서 문자열값을 불러옵니다.
    function getString(key: string): string;

    // AppData를 통해 저장한 앱 데이터 중 키값에 해당하는 앱 데이터를 지웁니다.
    function remove(key: string): void;

    // AppData를 통해 저장한 모든 앱 데이터를 지웁니다.
    function clear(): void;
}


