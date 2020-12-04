import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {
    const loader = new GLTFLoader();
    let scene = new THREE.Group();

    loader.load('path/to/model.glb', (gltf) => {

      scene = gltf.scene;

    }, undefined, (error) => {

      console.error(error);

    });
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();
  }

  ngAfterViewInit(): void {

  }


  // init() {
  //   // レンダラーを作成
  //   const renderer = new THREE.WebGLRenderer({
  //     canvas: document.querySelector('#canvas') as HTMLCanvasElement
  //   });
  //   // ウィンドウサイズ設定
  //   const width = (document.getElementById('main_canvas') as HTMLElement).getBoundingClientRect().width;
  //   const height = (document.getElementById('main_canvas') as HTMLElement).getBoundingClientRect().height;
  //   renderer.setPixelRatio(1);
  //   renderer.setSize(width, height);
  //   console.log(window.devicePixelRatio);
  //   console.log(width + ', ' + height);

  //   // シーンを作成
  //   const scene = new THREE.Scene();

  //   // カメラを作成
  //   const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  //   camera.position.set(0, 400, -1000);

  //   const controls = new OrbitControls(camera);
  //   //camera.lookAt(new THREE.Vector3(0, 400, 0));

  //   // Load GLTF or GLB
  //   const loader = new GLTFLoader();
  //   const url = 'http://localhost/Three.js_sample/VRoid.glb';

  //   let model: any = null;
  //   loader.load(
  //     url,
  //     function (gltf) {
  //       model = gltf.scene;
  //       model.name = 'model_with_cloth';
  //       model.scale.set(400.0, 400.0, 400.0);
  //       model.position.set(0, -400, 0);
  //       scene.add(gltf.scene);

  //       model['test'] = 100;
  //       console.log('model');
  //     },
  //     function (error) {
  //       console.log('An error happened');
  //       console.log(error);
  //     }
  //   );


  //   // 平行光源
  //   const light = new THREE.DirectionalLight(0xFFFFFF);
  //   light.intensity = 2; // 光の強さを倍に
  //   light.position.set(1, 1, 1);
  //   // シーンに追加
  //   scene.add(light);

  //   // 初回実行
  //   tick();
  //   function tick() {
  //     controls.update();

  //     scene.traverse(function (obj) {
  //       if (obj.name == 'J_Bip_C_Chest') {
  //         obj.rotation.z += 2 / 180 * 3.1415;
  //       }
  //     });
  //     if (model != null) {
  //       console.log(model);
  //     }
  //     renderer.render(scene, camera);
  //     requestAnimationFrame(tick);
  //   }


  //   // 初期化のために実行
  //   onResize();
  //   // リサイズイベント発生時に実行
  //   window.addEventListener('resize', onResize);
  //   function onResize() {
  //     // サイズを取得
  //     const width = (document.getElementById('main_canvas') as HTMLElement).getBoundingClientRect().width;
  //     const height = (document.getElementById('main_canvas') as HTMLElement).getBoundingClientRect().height;

  //     // レンダラーのサイズを調整する
  //     renderer.setPixelRatio(window.devicePixelRatio);
  //     renderer.setSize(width, height);

  //     // カメラのアスペクト比を正す
  //     camera.aspect = width / height;
  //     camera.updateProjectionMatrix();
  //     console.log(width);
  //   }
  // }

}
