ig.module(
	'game.entities.IBtitleScreenBackgroundImage'
)
.requires(
	'impact.entity'
)
.defines(function(){

	IBEntityTitleScreenBackgroundImage = ig.Entity.extend({
		animSheet: new ig.AnimationSheet( 'media/windmillBackground_static.png', 320, 568 ),
		size: {x:320, y:568},
		collides: ig.Entity.COLLIDES.NEVER,
		zIndex: -100,

		init: function( x, y, settings ){
			//call the parent constructor
			this.parent( x, y, settings );
			this.pos.x = 0;
			this.pos.y = 0;

			//add animations
			this.addAnim( 'idle', 0.1, [0] );
		},

		update: function(){
			//call the parent
			this.parent();
		}

	});

});