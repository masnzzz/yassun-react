import styled from 'styled-components';
import { useEffect, useState } from 'react';

const LoadDiv = styled.div`
    padding: 36px;
`

/**
 * 
 * @param {*} WrappedComponent 
 * @param {*} fetchData
 * @returns 
 */
// dataステートが存在する場合はWrappedComponentを表示する
// それ以外の時は「ロード中」と表示したい
export const withLoading = (WrappedComponent, fetchData) => {
    return () => {
        // dataのステートを作成、初期値はnull
        const [data, setData] = useState(null);

        // データの取得
        useEffect(() => {
            fetch();
        }, [])
        // 一回しか起きてほしくないので[],空の配列を指定,マウンティング時のみ発生

        // データを取得
        const fetch = async () => {
            // await...promiseの前提なので
            const data = await fetchData();
            // dataをステートにセット
            setData(data);
        }

        // ロード中の表示
        const Loading = (
            <LoadDiv>ロード中...</LoadDiv>
        )

        // dataステートが存在する場合WrappedComponent、それ以外は Loadingを表示
        // データを直接WrappedComponentに渡したい...data={data}
        return data ? <WrappedComponent data={data} /> : Loading;
    }
}
