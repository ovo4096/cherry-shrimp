<template>
  <iscroll-view ref="scrollView" class="wrapper" @pullUp="pullUp" @pullDown="pullDown" :options="{ scrollX: true, scrollY: false, mouseWheel: true }">
    <ul class="clearfix">
      <li>Header 1</li>
      <li>Header 2</li>
      <li>Header 3</li>
      <li>Header 4</li>
      <li>Header 5</li>
      <li>Header 6</li>
      <li>Header 7</li>
      <li>Header 8</li>
      <li>Header 9</li>
      <li>Header 10</li>
      <li>Header 11</li>
      <li>Header 12</li>
      <li>Header 13</li>
      <li>Header 14</li>
      <li>Header 15</li>
      <li>Header 16</li>
      <li>Header 17</li>
      <li>Header 18</li>
      <li>Header 19</li>
      <li>Header 20</li>
      <li>Header 21</li>
      <li>Header 22</li>
      <li>Header 23</li>
      <li>Header 24</li>
      <li>Header 25</li>
      <li>Header 26</li>
      <li>Header 27</li>
      <li>Header 28</li>
      <li>Header 29</li>
      <li>Header 30</li>
      <li>Header 31</li>
      <li>Header 32</li>
      <li>Header 33</li>
      <li>Header 34</li>
      <li>Header 35</li>
      <li>Header 36</li>
      <li>Header 37</li>
      <li>Header 38</li>
      <li>Header 39</li>
      <li>Header 40</li>
      <li>Header 41</li>
      <li>Header 42</li>
      <li>Header 43</li>
    </ul>
  </iscroll-view>
</template>

<script>
export default {
  methods: {
    pullUp () {
      console.log('Pull up.')
    },
    pullDown () {
      console.log('Pull down.')
    }
  },
  mounted () {
    this.$refs.scrollView.refresh()
  }
}
</script>
<style>
html, body {
  height: 100%;
}

.wrapper {
	position: absolute;
	z-index: 1;
	top: 45px;
	bottom: 48px;
	left: 0;
	width: 100%;
	background: #ccc;
	overflow: hidden;
}

.wrapper > div {
  position: absolute;
	z-index: 1;
	-webkit-tap-highlight-color: rgba(0,0,0,0);
	width: 2000px;
	height: 100%;
	background-color: #a00;
	-webkit-transform: translateZ(0);
	-moz-transform: translateZ(0);
	-ms-transform: translateZ(0);
	-o-transform: translateZ(0);
	transform: translateZ(0);
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	-webkit-text-size-adjust: none;
	-moz-text-size-adjust: none;
	-ms-text-size-adjust: none;
	-o-text-size-adjust: none;
	text-size-adjust: none;
}

ul {
	list-style: none;
	padding: 0;
	margin: 0;
	width: 100%;
	height: 100%;
	text-align: center;
}

li {
	display: block;
	float: left;
	width: 100px;
	height: 100%;
	border-right: 1px solid #ccc;
	background-color: #fafafa;
	font-size: 14px;
}
</style>
