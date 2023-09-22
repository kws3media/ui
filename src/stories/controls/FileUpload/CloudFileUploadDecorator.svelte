<div class="columns">
  <div class="column">
    <h4 class="title is-size-5 is-primary has-text-centered">
      Cloud File Upload
    </h4>
    <KwsCloudFileUpload
      {queue}
      preparer={(data) => prepareUpload(itemlId, data)}
      acknowledger={(data) => ackUpload(itemlId, data)}
      max={536870912}
      label="Add image or document.."
      allowed={allowed_ext}
      accept={getMimesFor(allowed_ext)} />
  </div>
</div>

<script>
  import { CloudFileUpload as KwsCloudFileUpload } from "@kws3/ui";
  import { getMimesFor } from "@kws3/ui/upload";

  let itemlId,
    queue = "",
    allowed_ext = [
      "jpg",
      "jpeg",
      "png",
      "pdf",
      "doc",
      "docx",
      "xls",
      "xlsx",
      "ppt",
      "pptx",
      "webp",
    ];

  function prepareUpload(itemlId, data) {
    console.log("Prepare:" + data + itemlId);
  }

  function ackUpload(itemlId, data) {
    console.log("Ack:" + data + itemlId);
  }
</script>
