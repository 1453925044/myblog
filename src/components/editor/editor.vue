<template>
<div>
    <editor id="tinymce" v-model="content" :init="init"></editor>
</div>
</template>

<script>
// 引入富文本编辑器
import 'tinymce/themes/silver'
import tinymce from 'tinymce/tinymce'
import Editor from '@tinymce/tinymce-vue'
// 编辑器插件plugins
import 'tinymce/plugins/help'
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/image'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/anchor'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/charmap'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/autosave'
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/emoticons'
import 'tinymce/plugins/codesample'
import 'tinymce/plugins/insertdatetime'
import '../../../static/tinymce/emojis.js'
export default {
    components: {
        Editor
    },
    watch: {
        content(newVal, oldVal) {
            return this.$emit('updata', newVal)
        }
    },
    data() {
        return {
            content: '',
            init: {
                // 选择器
                selector: '#tinymce',
                // 自动获取光标
                auto_focus: true,
                toolbar_mode:'wrap',
                width: '100%', //编辑器宽度
                height: 810, //编辑器高度
                language_url: '/static/tinymce/langs/zh_CN.js', //语言包
                language: 'zh_CN', //语言
                skin_url: '/static/tinymce/skins/ui/oxide', //主题色
                // 插件列表
                plugins: 'link lists preview advlist insertdatetime emoticons codesample charmap autolink autosave anchor fullscreen image code help table wordcount ',
                // 工具栏列表
                toolbar: `code undo redo cut|  insertdatetime copy paste image preview | forecolor backcolor bold italic underline strikethrough link anchor  restoredraft | alignleft aligncenter alignright alignjustify outdent indent | emoticons table charmap  help bullist numlist fullscreen | styleselect formatselect fontselect fontsizeselect  | codesample blockquote subscript superscript removeformat | `,
                // 自定义特殊符号
                charmap_append: [
                    [0x2615, 'morning coffee'],
                    [0x2600, 'sun'],
                    [0x2601, 'cloud'],
                ],
                theme: 'silver', //设置主题
                suffix: '.min',
                branding: false, //隐藏右下角
                paste_data_images: true, // 允许粘贴图像
                contextmenu: "bold copy", //上下文菜单
                menubar: 'file edit insert view format table tools help',
                fontsize_formats: '12px 14px 16px 18px 24px 36px 48px 56px 72px',
                // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
                // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
                images_upload_handler: (blobInfo, success, failure) => {
                    console.log(blobInfo)
                    // const img = 'data:image/jpeg;base64,' + blobInfo.base64();
                    const img = blobInfo.blob();
                    console.log(blobInfo.blob());
                    success(img)
                    // const formData = new FormData();
                    // formData.append('file',blobInfo.blob());

                }
            },
        }
    },
    mounted() {},
}
</script>

<style lang="less">

</style>
