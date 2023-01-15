
console.log(THREE)
//scene
const scene = new THREE.Scene()

//objects 
const box = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 'red'})
const mesh = new THREE.Mesh(box, material)
scene.add(mesh)

//sizes
const sizes = {
    width: 800,
    height: 600
}
//camera
const camera = new THREE.PerspectiveCamera(95, sizes.width / sizes.height)
camera.position.z  = 3
camera.position.y = 1
camera.position.x = 1
scene.add(camera)

//renderer
const canvas = document.querySelector('.Webgl')
console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas:canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene,camera)