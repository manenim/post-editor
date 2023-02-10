import EditorHeader from "./EditorHeader"

const TextEditor = () => {
  return (
      <div className="md:w-[68%] lg:w-[58%]">
          <EditorHeader />

          <div className="editor bg-white w-[92%] mx-auto mt-6 shadow-shad">
              <div className="editor-text py-12 font-sans">
                  <p className="px-12 font-sans text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nunc a neque volutpat sodales. Integer eget enim nec libero interdum tincidunt a sed purus. Quisque lectus ante, convallis quis nulla vitae, pharetra rutrum enim. Suspendisse a rhoncus neque. Quisque aliquam augue id ex fringilla porttitor. Mauris nec varius risus. In et iaculis turpis, et feugiat leo. Nunc placerat est et urna dapibus, in tincidunt sapien dictum. Nunc ac pulvinar odio.
                  </p>
                  <p className="pt-4 px-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nunc a neque volutpat sodales. Integer eget enim nec libero interdum tincidunt a sed purus. Quisque lectus ante, convallis ugue id ex fringilla porttitor. Mauris nec varius risus. In et iaculis turpis, et feuquis nulla vitae, pharetra rutrum enim. Suspendisse a rhoncus neque. Quisque aliquam agiat leo. Nunc placerat est et urna dapibus, in tincidunt sapien dictum. Nunc ac pulvinar odio.
                  </p>
                  <p className="pt-4 px-12">
                      Ut non vehicula lorem. Aliquam erat volutpat. Praesent sit amet eros non lacus vulputate fermentum in eu eros. Cras neque ex, suscipit sed eros at, convallis egestas mi. Sed venenatis imperdiet mauris in lobortis. Aliquam sapien nisi, varius nec lacinia a, pharetra et nisl. Proin dapibus imperdiet fringilla. Aliquam erat volutpat. Orci varius.
                  </p>
                  <p className="pt-4 px-12">
                      Ut non vehicula lorem. Aliquam erat volutpat. Praesent sit amet eros non lacus vulputate fermentum in eu eros. Cras neque ex, suscipit sed eros at, convallis egestas mi. Sed venenatis imperdiet mauris in lobortis. Aliquam sapien nisi, varius nec lacinia a, pharetra et nisl. Proin dapibus imperdiet fringilla. Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent faucibus blandit odio ultrices venenatis. Sed consequat lorem quam, eget auctor magna imperdiet et. Ut eget velit nec lorem sollicitudin dictum. Suspendisse sit amet sem tempus, tempus sem a, volutpat nibh. Nulla feugiat velit quam, gravida feugiat mauris mattis at.
                  </p>
                  <p className="pt-4 px-12">
                      ante, convallis quis nulla vitae, pharetra rutrum enim. Suspendisse a rhoncus neque.
                  </p>
              </div>
          </div>
    </div>
  )
}

export default TextEditor