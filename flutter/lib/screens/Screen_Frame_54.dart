import 'package:flutter/material.dart';


class Screen_Frame_54 extends StatelessWidget {
  const Screen_Frame_54({super.key,});

  @override
  Widget build(BuildContext context) {
    return  Scaffold(
       body: Column(
  mainAxisSize: MainAxisSize.min,
  children: [
       Container(decoration: BoxDecoration(
color:Color.fromRGBO(
255,255,255,1.0)
,

),child: //Frame 54
Container(
  

  
child: Stack(
    children: children: [
Positioned(
    left: 350.0,
	top: 10,
	
    child: 
Container( 
width: 95,
height: 130,
decoration: BoxDecoration(
color:Color.fromRGBO(
139,18,18,1.0)
,
),
),

),
Column(
   mainAxisAlignment: MainAxisAlignment.start,
 crossAxisAlignment: CrossAxisAlignment.start,

  children: [

Container( 
width: 387,
height: 50,
decoration: BoxDecoration(
color:Color.fromRGBO(
217,217,217,1.0)
,
),
),

SizedBox( height: 75,),],

),
),
],
),
,
	fit: StackFit.expand,
	clipBehavior: Clip.none,
	
),
),
  ],
),

    );
  }
}
