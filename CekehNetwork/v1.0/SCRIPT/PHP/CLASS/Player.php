<?php
	class Player{
			
		public $id;
		public $name;
		public $hit_history;
		
		function Player($id, $name, $hit_history){
			$this->id = $id;
			$this->name = $name;
			$this->hit_history = $hit_history;
		}	
	}
?>