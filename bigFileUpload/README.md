# 大文件上传

1.  文件切片上传

2.  断点续传

    - 要实现断点续传需要后端提供一个记忆上传节点的借口，在每次刷新后获取切片位置，从该位置继续上传

3.  文件秒传

    - 原理， 使用文件生成一个 hash 值后，把这个 hash 发送给后端，后端通过 hash 去查询是否有同名的文件，若有直接给返回已存在了相同的文件，及不需要再上传了（障眼法而已）。

4.  暂停上传

    - 原理，创建一个切片数组，用来保存上传文件，当一个文件上传成功即把它从数组中 pop 出去，当点击暂停上传时，即把数组中的请求关闭掉，

            // xhr 使用 abort（xhr.abort）
            function runXHR(url) {
                log.textContent = '';

                const xhr = new XMLHttpRequest();
                addListeners(xhr);
                xhr.open("GET", url);
                xhr.send();
                return xhr;
            }

            xhrButtonSuccess.addEventListener('click', () => {
                runXHR('dgszyjnxcaipwzy.jpg');
            });

            xhrButtonError.addEventListener('click', () => {
                runXHR('https://somewhere.org/i-dont-exist');
            });

            xhrButtonAbort.addEventListener('click', () => {
                runXHR('dgszyjnxcaipwzy.jpg').abort();
            });

            // axios 使用 abort
             const controller = new AbortController();
             axios.get('/foo/bar', {
                 signal: controller.signal
             }).then(function(response) {
             //...
             });
             // 取消请求
             controller.abort()
             ）
