export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'company', title: 'Company', type: 'string'},
    {
      name: 'imageurl',
      title: 'ImgURL',
      type: 'image',
      options: {
        hotspot: true, //(1)
      },
    },
    {name: 'feedback', title: 'Feedback', type: 'string'},
  ],
}

/*
Trình tự code: viết export default object rồi liệt kê các properties lớn trước cho object này bao gồm name, title, type, và cuối cùng là fields. Viết 1 fields trước rồi copy nó ra thành 3 cái nhỏ. 
(1)Nghĩa là người dùng có thể chọn crop khi up ảnh này, xem thêm tại https://www.sanity.io/docs/presenting-images
*/
