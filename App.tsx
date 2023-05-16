/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { 
  StyleSheet,
  View,
  SafeAreaView,
  Pressable,
  Text,
  Alert, } from 'react-native';
  const Separator = () => <View style={styles.separator} />;
  declare global {
    var first:number;
 
  
    var second:number;
    var result:number;
    var oprtr:string;

  }
const App = () => {
  
  const [value, setValue] = useState("");
  const [resultval, setResult] = useState("");

 
 
  function opr(){
    var values:string[]= value.split(oprtr);
    first = parseInt(values[0]);
    second = parseInt(values[1]);
if(oprtr == "+"){

  result=first + second;

}
if(oprtr == "-"){
  
  
    result=first - second;
}
if( oprtr == "*"){
  
    result=first * second;
}
if( oprtr == "/"){
 
    result=first / second;
}

    
    setResult(result.toString());
    setValue("");
  }
  function add(){
  
    setValue(value+"+");
    oprtr="+";
  }
  function sub(){
 
    
    setValue(value+"-");
    oprtr="-";
  }
  function mul(){
  
    setValue(value+"*");
    oprtr="*";
  }
  function div(){
   
    setValue(value+"/");
    oprtr="/";
  }

  return (
    
    <SafeAreaView
      style={styles.container}>
        
      <Separator />
      <View style={styles.row}>
        
        
      <Pressable style={styles.button} onPress={()=>{setValue(value+"0");}}>
      <Text style={styles.text}>0</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={()=>{setValue(value+".");}}>
      <Text style={styles.text}>.</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={()=>Alert.alert('coming soon')}>
      <Text style={styles.text}>√</Text>
      </Pressable>
      <Pressable style={styles.buttoneq} onPress={opr}>
      <Text style={styles.text}>=</Text>
      </Pressable>
      </View>
      <Separator />
      <View style={styles.row}>
        
        
      <Pressable style={styles.button} onPress={()=>{setValue(value+"1");}}>
      <Text style={styles.text}>1</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={()=>{setValue(value+"2");}}>
      <Text style={styles.text}>2</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={()=>{setValue(value+"3");}}>
      <Text style={styles.text}>3</Text>
      </Pressable>
      <Pressable style={styles.buttonOp} onPress={add}>
      <Text style={styles.text}>+</Text>
      </Pressable>
       
      </View>
      <Separator />
      <View style={styles.row}>
        
        
      <Pressable style={styles.button} onPress={()=>{setValue(value+"4");}}>
      <Text style={styles.text}>4</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={()=>{setValue(value+"5");}}>
      <Text style={styles.text}>5</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={()=>{setValue(value+"6");}}>
      <Text style={styles.text}>6</Text>
      </Pressable>
      <Pressable style={styles.buttonOp} onPress={sub}>
      <Text style={styles.text}>-</Text>
      </Pressable>
       
      </View>
      <Separator />
      <View style={styles.row}>
        
        
      <Pressable style={styles.button} onPress={()=>{setValue(value+"7");}}>
      <Text style={styles.text}>7</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={()=>{setValue(value+"8");}}>
      <Text style={styles.text}>8</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={()=>{setValue(value+"9");}}>
      <Text style={styles.text}>9</Text>
      </Pressable>
      <Pressable style={styles.buttonOp} onPress={mul}>
      <Text style={styles.text}>X</Text>
      </Pressable>
       
      </View>
      <Separator/>
      <View style={styles.row}>
        <Pressable style={styles.buttonOp} onPress={()=>{setValue("");}}>
        <Text style={styles.text}>C</Text>
        </Pressable>
        <Pressable style={styles.buttonOp} onPress={()=>Alert.alert('coming soon')}>
        <Text style={styles.text}>+/-</Text>
        </Pressable>
        <Pressable style={styles.buttonOp} onPress={()=>Alert.alert('coming soon')}>
        <Text style={styles.text}>%</Text>
        </Pressable>
        <Pressable style={styles.buttonOp} onPress={div}>
        <Text style={styles.text}>/</Text>
        </Pressable>
        </View>
        <Separator/>
        <View style={styles.rowresult}>
          <Text style={styles.result}>{resultval}</Text>

        </View>
        <View style={styles.rowinput}>
          <Text style={styles.input}>{value}</Text>

        </View>
       
        
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
    marginHorizontal: 16,
    paddingBottom: 30
    
  },
  input: {
   
    fontSize: 40,
    color: 'white'
   
  },
  result: {
   
    fontSize: 28,
    color: 'white'
   
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowresult: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 30
  },
  rowinput: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 170
  },
  separator: {
    marginVertical: 8,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 80,
   
    borderRadius: 16,
    elevation: 3,
    backgroundColor: 'black',
  },
  buttonOp: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 80,
    borderRadius: 16,
    elevation: 3,
    backgroundColor: '#2f4f4f',
  },
  buttoneq: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 80,
    borderRadius: 16,
    elevation: 3,
    backgroundColor: 'orange',
  },
  text: {
    fontSize: 22,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  
});

export default App;
